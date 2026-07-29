import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { AppContent, Lang } from '../i18n/types';

const MARGIN = 16;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const ACCENT: [number, number, number] = [15, 110, 124];
const INK: [number, number, number] = [15, 23, 42];
const MUTED: [number, number, number] = [100, 116, 139];

@Injectable({ providedIn: 'root' })
export class CvPdfService {
  download(content: AppContent, lang: Lang): void {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    let y = MARGIN;

    const ensureSpace = (needed: number): void => {
      if (y + needed <= PAGE_HEIGHT - MARGIN) {
        return;
      }
      doc.addPage();
      y = MARGIN;
    };

    const writeWrapped = (
      text: string,
      x: number,
      maxWidth: number,
      lineHeight: number
    ): void => {
      const lines = doc.splitTextToSize(text, maxWidth) as string[];
      for (const line of lines) {
        ensureSpace(lineHeight);
        doc.text(line, x, y);
        y += lineHeight;
      }
    };

    const sectionTitle = (title: string): void => {
      ensureSpace(12);
      y += 3;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...ACCENT);
      doc.text(title.toUpperCase(), MARGIN, y);
      y += 2;
      doc.setDrawColor(...ACCENT);
      doc.setLineWidth(0.4);
      doc.line(MARGIN, y, MARGIN + CONTENT_WIDTH, y);
      y += 6;
      doc.setTextColor(...INK);
    };

    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(...INK);
    doc.text(content.profile.name, MARGIN, y);
    y += 7;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(...ACCENT);
    writeWrapped(content.profile.title, MARGIN, CONTENT_WIDTH, 5.2);

    doc.setFontSize(9.5);
    doc.setTextColor(...MUTED);
    doc.text(content.profile.location, MARGIN, y);
    y += 5;

    const contactBits = content.profile.socials
      .map((s) => s.detail)
      .filter(Boolean)
      .slice(0, 4);
    if (contactBits.length) {
      writeWrapped(contactBits.join('  ·  '), MARGIN, CONTENT_WIDTH, 4.5);
    }

    y += 2;
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    writeWrapped(content.profile.summary, MARGIN, CONTENT_WIDTH, 4.8);

    // Skills
    sectionTitle(content.about.title);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    for (const group of content.profile.skillGroups) {
      ensureSpace(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...INK);
      doc.text(`${group.title}: `, MARGIN, y);
      const labelWidth = doc.getTextWidth(`${group.title}: `);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...MUTED);
      writeWrapped(
        group.items.join(' · '),
        MARGIN + labelWidth,
        CONTENT_WIDTH - labelWidth,
        4.4
      );
      y += 1.5;
    }

    // Experience
    sectionTitle(content.experience.title);
    for (const job of content.profile.experiences) {
      ensureSpace(22);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(...INK);
      writeWrapped(job.role, MARGIN, CONTENT_WIDTH, 4.8);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(...ACCENT);
      const companyLine = `${job.company}  ·  ${job.period}`;
      writeWrapped(companyLine, MARGIN, CONTENT_WIDTH, 4.4);

      doc.setTextColor(...MUTED);
      doc.setFontSize(9);
      doc.text(job.location, MARGIN, y);
      y += 4.2;

      doc.setTextColor(...INK);
      doc.setFontSize(9.5);
      writeWrapped(job.description, MARGIN, CONTENT_WIDTH, 4.4);

      if (job.technologies.length) {
        doc.setTextColor(...MUTED);
        doc.setFontSize(8.5);
        writeWrapped(
          job.technologies.join(' · '),
          MARGIN,
          CONTENT_WIDTH,
          4
        );
      }
      y += 3;
    }

    // Education
    sectionTitle(content.education.academicTitle);
    for (const edu of content.profile.education) {
      ensureSpace(14);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...INK);
      doc.text(edu.institution, MARGIN, y);
      y += 4.5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      writeWrapped(edu.degree, MARGIN, CONTENT_WIDTH, 4.4);
      doc.setTextColor(...MUTED);
      doc.setFontSize(9);
      doc.text(edu.period, MARGIN, y);
      y += 6;
    }

    // Certifications
    sectionTitle(content.education.certificatesTitle);
    for (const cert of content.profile.certifications) {
      ensureSpace(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...INK);
      writeWrapped(cert.title, MARGIN, CONTENT_WIDTH, 4.3);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...ACCENT);
      doc.text(cert.issuer, MARGIN, y);
      y += 4;

      doc.setTextColor(...MUTED);
      const meta = cert.credentialId
        ? `${cert.issued}  ·  ${content.education.credentialIdLabel} ${cert.credentialId}`
        : cert.issued;
      writeWrapped(meta, MARGIN, CONTENT_WIDTH, 4);
      y += 2;
    }

    const filename = this.filename(content.profile.name, lang);
    doc.save(filename);
  }

  private filename(name: string, lang: Lang): string {
    const slug = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `CV-${slug}-${lang.toUpperCase()}.pdf`;
  }
}
