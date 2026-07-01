import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  number: string;
  icon: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  statIcon: string;
  statLabel: string;
  screenshots: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly projects: Project[] = [
        {
      id: 'sama-mobile-app-v2',
      number: '07',
      icon: 'fa-mobile-alt',
      category: 'Mobile App',
      title: 'SAMA Mobile App V2',
      description: 'Feature-rich mobile application with intuitive user interface, offline capabilities, push notifications, and seamless integration with enterprise backend systems for enhanced productivity.',
      tags: ['Ionic', 'Angular', 'Capacitor', '.NET & REST API'],
      statIcon: 'fa-rocket',
      statLabel: 'Live',
      screenshots: [
        '/assets/Mobile Apk2/1779454250235.jpg',
        '/assets/Mobile Apk2/1779454250266.jpg',
        '/assets/Mobile Apk2/1779454250299.jpg',
        '/assets/Mobile Apk2/1779454250326.jpg',
        '/assets/Mobile Apk2/1779454250357.jpg',
        '/assets/Mobile Apk2/1779454250390.jpg',
        '/assets/Mobile Apk2/1779454293423.jpg',
        '/assets/Mobile Apk2/1779454293471.jpg',
        '/assets/Mobile Apk2/1779456506932.jpg',
        '/assets/Mobile Apk2/1779456506978.jpg',
        '/assets/Mobile Apk2/1779456507011.jpg',
        '/assets/Mobile Apk2/1779456507046.jpg',
        '/assets/Mobile Apk2/1779456507073.jpg',
        '/assets/Mobile Apk2/1779456507104.jpg',
        '/assets/Mobile Apk2/1779456507130.jpg',
        '/assets/Mobile Apk2/1779456507157.jpg',
        '/assets/Mobile Apk2/realtime trend.jpg',
        '/assets/Mobile Apk2/1M Hist trend.jpg',
        '/assets/Mobile Apk2/bbl chart.jpg',
        '/assets/Mobile Apk2/bbl-chart props1.jpg',
        '/assets/Mobile Apk2/bbl-chart props2.jpg',
        '/assets/Mobile Apk2/3d chart.jpg',
        '/assets/Mobile Apk2/3d chart props.jpg',
        '/assets/Mobile Apk2/heatmap.jpg',
        '/assets/Mobile Apk2/heatmap props1.jpg',
        '/assets/Mobile Apk2/heatmap props2.jpg',
        '/assets/Mobile Apk2/circular gauge.jpg',
        '/assets/Mobile Apk2/linear gauge.jpg'
      ]
    },
    {
      id: 'e-logbook',
      number: '01',
      icon: 'fa-book',
      category: 'Mobile App',
      title: 'E-Logbook Mobile App',
      description: 'Digital logbook application for efficient record-keeping and data management. Features include real-time data entry, report generation, user authentication, and seamless synchronization with backend services.',
      tags: ['Ionic', 'Angular', 'Capacitor', '.NET & REST API'],
      statIcon: 'fa-star',
      statLabel: 'Featured',
      screenshots: [
        '/assets/elogbook apk/Screenshot 2026-07-01 182111.png',
        '/assets/elogbook apk/Screenshot 2026-07-01 182122.png',
        '/assets/elogbook apk/Screenshot 2026-07-01 182134.png',
        '/assets/elogbook apk/Screenshot 2026-07-01 182146.png',
        '/assets/elogbook apk/Screenshot 2026-07-01 182200.png',
        '/assets/elogbook apk/Screenshot 2026-07-01 182211.png',
        '/assets/elogbook apk/Screenshot 2026-07-01 182226.png'
      ]
    },
    {
      id: 'ae-web-client',
      number: '08',
      icon: 'fa-chart-line',
      category: 'Web Application',
      title: 'AE Web Client',
      description: 'Alarm and event analytics web client featuring KPI radar charts, alarm performance indicators, and steady-state/upset-state visualizations for operational monitoring and diagnostics.',
      tags: ['Angular', 'TypeScript', 'D3.js', 'REST API'],
      statIcon: 'fa-chart-line',
      statLabel: 'Analytics',
      screenshots: [
        '/assets/AE Webclient/KPI Radar Chart.jpg',
        '/assets/AE Webclient/Alarm Performance Indication Bar chart.jpg',
        '/assets/AE Webclient/SteadystateandUpsetstate.jpg',
        '/assets/AE Webclient/WhatsApp Image 2024-09-10 at 8.51.13 PM.jpeg',
        '/assets/AE Webclient/WhatsApp Image 2024-09-10 at 8.51.13 PM (1).jpeg',
        '/assets/AE Webclient/WhatsApp Image 2024-09-10 at 8.51.13 PM (2).jpeg'
      ]
    },
    {
      id: 'sama-website',
      number: '06',
      icon: 'fa-globe',
      category: 'Website',
      title: 'SAMA Website',
      description: 'Modern, responsive corporate website with dynamic content management, SEO optimization, interactive components, and seamless user experience across all devices and platforms.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive'],
      statIcon: 'fa-desktop',
      statLabel: 'Web',
      screenshots: [
        '/assets/Website/Screenshot 2026-07-01 123708.png',
        '/assets/Website/Screenshot 2026-07-01 123755.png',
        '/assets/Website/Screenshot 2026-07-01 123847.png',
        '/assets/Website/Screenshot 2026-07-01 123907.png'
      ]
    },
    {
      id: 'sama-mobile-app',
      number: '03',
      icon: 'fa-mobile-alt',
      category: 'Mobile App',
      title: 'SAMA Mobile App',
      description: 'Feature-rich mobile application with intuitive user interface, offline capabilities, push notifications, and seamless integration with enterprise backend systems for enhanced productivity.',
      tags: ['Ionic', 'Angular', 'Cordova', 'TypeScript'],
      statIcon: 'fa-rocket',
      statLabel: 'Live',
      screenshots: []
    },
    {
      id: 'web-reports',
      number: '02',
      icon: 'fa-chart-bar',
      category: 'Web Application',
      title: 'Web Reports',
      description: 'Comprehensive web-based reporting system with interactive dashboards, data visualization, advanced filtering capabilities, and automated report generation with export functionality.',
      tags: ['React', 'Python', 'REST API', 'Charts'],
      statIcon: 'fa-database',
      statLabel: 'Analytics',
      screenshots: [
        '/assets/Web Reports/Screenshot 2025-05-13 185229.png',
        '/assets/Web Reports/Screenshot 2025-05-13 185320.png',
        '/assets/Web Reports/Screenshot 2025-06-08 215509.png',
        '/assets/Web Reports/Screenshot 2025-06-08 220149.png',
        '/assets/Web Reports/Screenshot 2026-03-05 104020.png',
        '/assets/Web Reports/Screenshot 2026-03-20 115828.png',
        '/assets/Web Reports/Screenshot 2026-03-20 121649.png'
      ]
    },
    {
      id: 'change-management',
      number: '05',
      icon: 'fa-tasks',
      category: 'Web Application',
      title: 'Change Management',
      description: 'Enterprise change management solution for tracking and managing organizational changes. Includes workflow automation, approval processes, audit trails, and comprehensive reporting features.',
      tags: ['Ionic', 'Angular', 'TypeScript', 'REST API'],
      statIcon: 'fa-briefcase',
      statLabel: 'Enterprise',
      screenshots: [
        '/assets/Change Management/Changemanager.png',
        '/assets/Change Management/menu.png',
        '/assets/Change Management/1) home.png',
        '/assets/Change Management/2) home.png',
        '/assets/Change Management/1) method1 -hazards.png',
        '/assets/Change Management/2) method1 - time2consequences.png',
        '/assets/Change Management/3) priority-assist method1.png',
        '/assets/Change Management/4) method2 - impacts.png',
        '/assets/Change Management/5) method2- conequences.png',
        '/assets/Change Management/6) method2 - respondtime.png',
        '/assets/Change Management/7) priority-assist method2.png',
        '/assets/Change Management/3) tag-selection.png',
        '/assets/Change Management/4) compare view.png',
        '/assets/Change Management/8) add-operator-assist.png',
        '/assets/Change Management/9) view all operator assists.png',
        '/assets/Change Management/10) master-data.png',
        '/assets/Change Management/11) systems.png',
        '/assets/Change Management/12) alarms.png',
        '/assets/Change Management/13) operator-response.png',
        '/assets/Change Management/14) change-notes.png',
        '/assets/Change Management/15) add-review.png',
        '/assets/Change Management/16) alrm-reviews.png',
        '/assets/Change Management/InerlockBypass.png',
        '/assets/Change Management/Screenshot (15).png',
        '/assets/Change Management/Screenshot (16).png'
      ]
    },
    {
      id: 'web-client',
      number: '04',
      icon: 'fa-laptop-code',
      category: 'Web Application',
      title: 'Web Client',
      description: 'Dynamic web client application built with vanilla JavaScript for optimal performance. Features include responsive design, real-time updates, interactive UI components, and efficient data handling.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
      statIcon: 'fa-code',
      statLabel: 'Vanilla JS',
      screenshots: [
        '/assets/logbook/Screenshot 2026-07-01 124128.png',
        '/assets/logbook/Screenshot 2026-07-01 124219.png',
        '/assets/logbook/Screenshot 2026-07-01 182659.png',
        '/assets/logbook/Screenshot 2026-07-01 182715.png',
        '/assets/logbook/Screenshot 2026-07-01 182736.png',
        '/assets/logbook/Screenshot 2026-07-01 182819.png',
        '/assets/logbook/Screenshot 2026-07-01 182835.png',
        '/assets/logbook/Screenshot 2026-07-01 182849.png',
        '/assets/logbook/Screenshot 2026-07-01 182908.png',
        '/assets/logbook/Screenshot 2026-07-01 182917.png',
        '/assets/logbook/Screenshot 2026-07-01 182947.png'
      ]
    }
  ];

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
