import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

// Setup file paths
const __dirname = path.resolve();
const outputPath = path.join(__dirname, 'src', 'assets', 'resume.pdf');

// Ensure assets directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const doc = new PDFDocument({ size: 'A4', margin: 40 });
const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Theme Colors (Navy and Dark Grey)
const PRIMARY_COLOR = '#1A365D'; // Dark Navy Blue
const TEXT_COLOR = '#2D3748'; // Charcoal
const SUB_COLOR = '#4A5568'; // Medium Grey
const LINE_COLOR = '#E2E8F0'; // Light slate line

// Typography helpers
const titleFont = 'Helvetica-Bold';
const boldFont = 'Helvetica-Bold';
const regularFont = 'Helvetica';
const italicFont = 'Helvetica-Oblique';

// Header
doc.fillColor(PRIMARY_COLOR)
   .font(titleFont)
   .fontSize(22)
   .text('Anubhav Pandey', { align: 'center' });

doc.fillColor(TEXT_COLOR)
   .font(regularFont)
   .fontSize(9.5)
   .text('Ayodhya, India  |  +91 7080881007  |  anubhav.pandey_cs23@gla.ac.in', { align: 'center' })
   .moveDown(0.2);

doc.fillColor('#3182CE') // Link blue
   .text('LinkedIn: linkedin.com/in/anubhav-pandey-696bb32a9  |  GitHub: github.com/anubhavv8784', { align: 'center' })
   .moveDown(0.8);

// Divider helper
function drawSectionHeader(title) {
  doc.moveDown(0.5);
  doc.fillColor(PRIMARY_COLOR)
     .font(boldFont)
     .fontSize(12)
     .text(title.toUpperCase())
     .moveDown(0.2);
  
  // Draw blue underline
  const y = doc.y;
  doc.strokeColor(PRIMARY_COLOR)
     .lineWidth(1.5)
     .moveTo(40, y)
     .lineTo(555, y)
     .stroke();
  
  doc.moveDown(0.5);
}

// 1. Education
drawSectionHeader('Education');

const eduItems = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'GLA University, Mathura',
    score: '67.6%',
    date: 'June 2027'
  },
  {
    degree: 'Intermediate (12th Grade)',
    school: 'Deva Public School, Ayodhya',
    score: '63.0%',
    date: 'May 2023'
  },
  {
    degree: 'High School (10th Grade)',
    school: 'Deva Public School, Ayodhya',
    score: '76.5%',
    date: 'May 2021'
  }
];

eduItems.forEach(item => {
  doc.fillColor(TEXT_COLOR).font(boldFont).fontSize(10.5).text(item.degree, { continued: true });
  doc.font(regularFont).fontSize(10.5).text(`, ${item.school}`, { continued: true });
  doc.font(boldFont).text(` — ${item.score}`, { align: 'left' });
  doc.font(italicFont).fontSize(9.5).fillColor(SUB_COLOR).text(item.date, { align: 'right' });
  doc.moveDown(0.4);
});

// 2. Training Experience
drawSectionHeader('Training Experience');

doc.fillColor(TEXT_COLOR).font(boldFont).fontSize(10.5).text('Job Oriented Value-Added Course', { continued: true });
doc.font(regularFont).text(' — GLA University, Mathura', { continued: true });
doc.font(boldFont).text(' (Trainee)');
doc.font(italicFont).fontSize(9.5).fillColor(SUB_COLOR).text('June 2025 – July 2025', { align: 'right' });

doc.fillColor(TEXT_COLOR).font(regularFont).fontSize(9.5);
const trainingPoints = [
  'Completed Full Stack Development using Java training, covering Core Java, JDBC, Servlets, JSP, HTML, CSS, JavaScript, and MySQL.',
  'Developed hands-on web applications using Java-based technologies following MVC architecture and database integration.',
  'Gained practical experience in building, testing, and deploying full-stack applications with both frontend and backend development.'
];

trainingPoints.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 15, align: 'justify', width: 500 }).moveDown(0.2);
});

// 3. Projects
drawSectionHeader('Projects');

// Project 1
doc.fillColor(TEXT_COLOR).font(boldFont).fontSize(10.5).text('Real-Time Chat Application', { continued: true });
doc.font(italicFont).fillColor(SUB_COLOR).text(' | React, JavaScript, HTML/CSS');

const proj1Points = [
  'Developed a real-time chat application with instant messaging and user authentication.',
  'Designed a responsive UI with dynamic updates for smooth user experience.'
];
doc.font(regularFont).fontSize(9.5).fillColor(TEXT_COLOR);
proj1Points.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 15, width: 500 }).moveDown(0.2);
});

// Project 2
doc.moveDown(0.2);
doc.fillColor(TEXT_COLOR).font(boldFont).fontSize(10.5).text('Smart Parking System', { continued: true });
doc.font(italicFont).fillColor(SUB_COLOR).text(' | Node.js, JavaScript, MongoDB');

const proj2Points = [
  'Built a parking management system with real-time slot availability and booking features.',
  'Implemented alerts and automatic slot release to improve efficiency.'
];
doc.font(regularFont).fontSize(9.5).fillColor(TEXT_COLOR);
proj2Points.forEach(pt => {
  doc.text(`• ${pt}`, { indent: 15, width: 500 }).moveDown(0.2);
});

// 4. Skills
drawSectionHeader('Technical Skills');

doc.font(boldFont).fontSize(9.5).fillColor(TEXT_COLOR).text('Programming Languages: ', { continued: true });
doc.font(regularFont).text('Java, SQL, JavaScript, HTML, CSS');

doc.font(boldFont).text('Frameworks & Libraries: ', { continued: true });
doc.font(regularFont).text('Node.js, Express.js, React.js');

doc.font(boldFont).text('Databases: ', { continued: true });
doc.font(regularFont).text('MongoDB, SQL');

doc.font(boldFont).text('Tools & Platforms: ', { continued: true });
doc.font(regularFont).text('Git, GitHub, Postman, Netlify, Vercel, Render');

doc.font(boldFont).text('Concepts: ', { continued: true });
doc.font(regularFont).text('Data Structures and Algorithms (DSA), Problem Solving, Object-Oriented Programming (OOP), DBMS');

doc.font(boldFont).text('Soft Skills: ', { continued: true });
doc.font(regularFont).text('Effective Communication, Interpersonal Skills, Team Leadership');

// 5. Achievements
drawSectionHeader('Achievements & Certifications');

const achievements = [
  'Solved 300+ DSA problems on LeetCode',
  'Gold Badge in Python — HackerRank',
  'Digital Accessibility in Mobile Apps — Infosys Springboard',
  'Full Stack Development using Java Certification (KVCH / GLA University)'
];

doc.font(regularFont).fontSize(9.5);
achievements.forEach(ach => {
  doc.text(`• ${ach}`).moveDown(0.2);
});

// Footer / Declaration
doc.moveDown(0.5);
doc.strokeColor(LINE_COLOR).lineWidth(0.5).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.4);

doc.fillColor(SUB_COLOR)
   .font(italicFont)
   .fontSize(8.5)
   .text('I hereby declare that all the above mentioned information is true and correct to the best of my knowledge.', { align: 'center' });

doc.end();
console.log('PDF Resume generated successfully at ' + outputPath);
