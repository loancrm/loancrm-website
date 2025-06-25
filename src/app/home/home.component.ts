import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeTab = 'crm';
  loanTypes: string[] = ['Personal Loans', 'Business Loans', 'Home Loans', 'LAP', 'Education Loans'];
  displayedText = '';
  currentWordIndex = 0;
  charIndex = 0;
  isDeleting = false;

  typingSpeed = 150;
  deletingSpeed = 50;
  pauseBeforeDeleting = 1500;

  carouselImages = [
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/3.png'
  ];
  leadsManaged = 250000;
  employeesManaged = 12000; isMobileMenuActive = false;
  clients = 300;
  title = "wintech"
  faqs = [
    {
      question: 'What is a Loan CRM and how does it help my business?',
      answer: 'A Loan CRM (Customer Relationship Management) software helps you streamline the entire loan lifecycle—from capturing leads and managing applications to tracking disbursements and automating follow-ups. It ensures efficiency, compliance, and better customer experience.',
      open: false
    },
    {
      question: 'Can this CRM support different types of loans like home, personal, or business loans?',
      answer: 'Yes, our Loan CRM is designed to support a wide range of loan categories including home, personal, auto, education, business, and more. It can be customized to suit your specific loan products and processes.',
      open: false
    },
    {
      question: 'Is borrower data stored securely in the CRM?',
      answer: 'Absolutely. We prioritize data security with encryption, access controls, and regular audits to ensure your clients’ information remains fully protected and compliant with data privacy regulations.',
      open: false
    },
    {
      question: 'Can I integrate the CRM with my existing systems and lender platforms?',
      answer: 'Yes, the CRM offers flexible integration options via APIs, making it easy to connect with your existing tools such as accounting software, credit bureaus, and partner lender portals.',
      open: false
    },
    {
      question: 'Can I customize the CRM workflows to fit my business process?',
      answer: 'Yes, the CRM is highly customizable, allowing you to tailor workflows, approval hierarchies, and notifications to match your unique business processes and improve operational efficiency.',
      open: false
    },

  {
      question: 'How does the CRM help with compliance and audit readiness?',
      answer: 'The system keeps detailed logs of every interaction, stores necessary documents securely, and provides audit trails to ensure you meet regulatory requirements and can respond to compliance checks efficiently.',
      open: false
    }
  ];

  items: MenuItem[] = [];
  isYearly = false;

  pricingPlans = [
    {
      name: 'Basic',
      icon: 'fas fa-layer-group',
      badgeClass: 'basic-badge',
      monthly: 999,
      yearly: 9999,
      features: [
        'Up to 1000 Leads',
        'Basic Lead Management',
        'Customer KYC Upload',
        'Single User Access',
        'Basic Reporting',
        'Email Notifications'
      ]
    },
    {
      name: 'Professional',
      icon: 'fas fa-star',
      badgeClass: 'premium-badge',
      monthly: 1999,
      yearly: 19999,
      features: [
        'Up to 5000 Leads',
        'Multi-User Support (5 Users)',
        'Workflow Automation',
        'Document Collection & Tracking',
        'Loan Application Tracking',
        'Integration with Email & SMS'
      ]
    },

  ];




  workflowSteps = [
    { icon: 'fas fa-bullseye', title: 'Lead Capturing', description: 'Capture leads from multiple channels automatically.' },
    { icon: 'fas fa-folder-open', title: 'Document Collection', description: 'Gather and manage borrower documents securely.' },
    { icon: 'fas fa-credit-card', title: 'Credit Scoring', description: 'Fetch and evaluate credit reports instantly.' },
    { icon: 'fas fa-handshake', title: 'Lender Mapping', description: 'Match applications to suitable lenders automatically.' },
    { icon: 'fas fa-rupee-sign', title: 'Disbursal & Payout', description: 'Track final disbursements and automate commission payouts.' }
  ];
  constructor() { }

  ngOnInit(): void {
    this.typeEffect();
    this.items = [

      { label: 'Home', routerLink: '/' },
      { label: 'About', routerLink: '/about' },

      { label: 'Contact', routerLink: '/contact' }


    ];
  }


  togglePricing(yearly: boolean) {
    this.isYearly = yearly;
  }
  // Toggle the mobile menu visibility
  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }
  submitContactForm(form: any) {
    if (form.valid) {
      alert('Form submitted! We will contact you soon.');
      form.reset();
    }
  }
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  trackByFn(index: number, item: any) {
    return index;
  }
  typeEffect() {
    const currentWord = this.loanTypes[this.currentWordIndex];

    if (!this.isDeleting) {
      // Typing
      this.displayedText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        // Pause before deleting
        this.isDeleting = true;
        setTimeout(() => this.typeEffect(), this.pauseBeforeDeleting);
        return;
      }
    } else {
      // Deleting
      this.displayedText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.loanTypes.length;
      }
    }

    const timeout = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    setTimeout(() => this.typeEffect(), timeout);
  }
}
