import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeTab = 'crm';
  loanTypes: string[] = ['Personal Loan', 'Business Loan', 'Home Loan', 'Education Loan', 'Vehicle Loan', 'Mortgage Loan'];
  displayedText = '';
  currentWordIndex = 0;
  charIndex = 0;
  isDeleting = false;
  features = [
    { title: 'Best Price', subtitle: 'Cost effective for Consultants' },
    { title: 'Flexible Subscription', subtitle: 'No lock-in and price hikes' },
    { title: 'Ease of Use', subtitle: 'Easy understandable UI' },
    { title: 'Easy Adoption', subtitle: 'Onboarding, Multiple Trainings' }
  ];

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
      question: 'Can I get a demo of MyLoanCRM?',
      answer: "Of course! Just connect with our technical expert on the contact details mentioned at the bottom of the page and get a demo scheduled. Get a detailed explanation of the software and its features. Don't hesitate to ask questions!",
      open: false
    },
    {
      question: 'Can this CRM support different types of loans like home, personal, or business loans?',
      answer: 'Yes, our MyLoanCRM is designed to support a wide range of loan categories including Home, Personal, Professional, Education, Business, and more. It can be customized to suit your specific loan products and processes.',
      open: false
    },
    {
      question: 'Is borrower data stored securely in the CRM?',
      answer: 'Absolutely. We prioritize data security with encryption, access controls, and regular audits to ensure your clients’ information remains fully protected and compliant with data privacy regulations.',
      open: false
    },
    {
      question: 'Is the platform mobile-friendly for field agents and sales teams?',
      answer: 'Top platforms offer responsive web interfaces or dedicated mobile apps so teams can access the CRM on the go.',
      open: false
    },
    {
      question: 'Can I customize the CRM workflows to fit my business process?',
      answer: 'Yes, the CRM is highly customizable, allowing you to tailor workflows, approval hierarchies, and notifications to match your unique business processes and improve operational efficiency.',
      open: false
    },

    {
      question: 'Can multiple teams or branches use the platform simultaneously?',
      answer: 'Advanced CRMs include role-based access control (RBAC) and multi-branch support for team scalability and permission management.',
      open: false
    }
  ];

  items: MenuItem[] = [];
  isYearly = false;

  pricingPlans = [
    // {
    //   name: 'Freelancer',
    //   icon: 'fas fa-layer-group',
    //   badgeClass: 'basic-badge',
    //   monthly: 25,
    //   yearly: 9999,
    //   features: [
    //    'Up to 1000 Leads',
    //     'Basic Lead Management',
    //     'Customer KYC Upload',
    //     'Single User Access',
    //     'Basic Reporting',
    //     'Email Notifications'
    //   ]
    // },
    {
      name: 'Basic',
      icon: 'fas fa-layer-group',
      badgeClass: 'premium-badge',
      monthly: 999,
      yearly: 9990,
      features: [
        'Lead Capture & Assignment',
        'Loan Application Tracking',
        'Basic Workflow Automation',
        'Basic Reports',
        'Role-based Access Control'
      ]
    },
    {
      name: 'Professional',
      icon: 'fas fa-star',
      badgeClass: 'premium-badge',
      monthly: 1499,
      yearly: 14990,
      features: [

        'Lead Capture & Assignment',
        'Loan Application Tracking',
        'Basic Workflow Automation',
        'Basic Reports',
        'Role-based Access Control',
        'Integration with Email & SMS',
        'Own Branding'
      ]
    }

  ];


  images: string[] = [
    'assets/images/clients/hdfc.png',
    'assets/images/clients/scb.png',
    'assets/images/clients/icici.png',
    'assets/images/clients/kotak.png',
    'assets/images/clients/axis.png',
    'assets/images/clients/yes.png',
    'assets/images/clients/bajaj.png',
    'assets/images/clients/smfg.png',
    'assets/images/clients/ugro.png',
    'assets/images/clients/aditya.png',
    'assets/images/clients/idfc.png',
    'assets/images/clients/indus.png',
    'assets/images/clients/tata.png',
    'assets/images/clients/muthoot.png',
    'assets/images/clients/lending.png',
    'assets/images/clients/neo.png',
    'assets/images/clients/edel.png',
    'assets/images/clients/clix.png',
    // 'assets/images/clients/indi.png',
    'assets/images/clients/hero.png',
    'assets/images/clients/poona.png',
    // 'assets/images/clients/ftcash.png',
    'assets/images/clients/arka.png',
    'assets/images/clients/bandhan.png',
    'assets/images/clients/mas.png',
    'assets/images/clients/chola.png',
    'assets/images/clients/fed.png',
    'assets/images/clients/finplex.png',
    'assets/images/clients/godrej.png',
    'assets/images/clients/protium.png',
    'assets/images/clients/iifl.png',
    'assets/images/clients/mahindra.png',
    'assets/images/clients/indifi.png',
    'assets/images/clients/kinara.png',
    'assets/images/clients/karur.png',
    'assets/images/clients/lt.png',
    'assets/images/clients/unity.png',
    'assets/images/clients/piramal.png',
    'assets/images/clients/shriram.png',
    'assets/images/clients/credit.png'
  ];
  numVisibleItems: number = 6;
  plans: any[] = [];
  displayPlans: any[] = [];

  workflowSteps = [
    { icon: 'fas fa-bullseye', title: 'Lead Capturing', description: 'Capture leads from multiple channels automatically.' },
    { icon: 'fas fa-folder-open', title: 'Document Collection', description: 'Gather and manage borrower documents securely.' },
    { icon: 'fas fa-credit-card', title: 'Credit Scoring', description: 'Fetch and evaluate credit reports instantly.' },
    { icon: 'fas fa-handshake', title: 'Lender Mapping', description: 'Match applications to suitable lenders automatically.' },
    { icon: 'fas fa-rupee-sign', title: 'Disbursal & Payout', description: 'Track final disbursements and automate commission payouts.' }
  ];
  constructor(private contactservice: ContactService) {
    // Initialize the form here if needed

  }

  ngOnInit(): void {
    this.typeEffect();
    this.loadPlans();
    this.items = [

      { label: 'Home', routerLink: '/' },
      { label: 'About', routerLink: '/about' },

      { label: 'Contact', routerLink: '/contact' }


    ];
    this.setVisibleItems(window.innerWidth);

    window.addEventListener('resize', () => {
      this.setVisibleItems(window.innerWidth);
    });

  }

  togglePricing(yearly: boolean): void {
    this.isYearly = yearly;
    this.updateDisplayPlans();
  }
  setVisibleItems(width: number): void {
    if (width < 576) {
      this.numVisibleItems = 2; // extra small
    } else if (width < 768) {
      this.numVisibleItems = 2; // small
    } else if (width < 992) {
      this.numVisibleItems = 3; // medium
    } else if (width < 1200) {
      this.numVisibleItems = 4; // large
    } else {
      this.numVisibleItems = 6; // extra large
    }
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
  loadPlans(): void {
    this.contactservice.getSubscriptionPlans().subscribe({
      next: (data: any) => {
        console.log(data);
        this.plans = data
          .filter((plan: any) => plan.plan_type !== 'Free') // Exclude free trial plans
          .map((plan: any) => ({
            ...plan,
            features: typeof plan.features === 'string' ? plan.features.split(',') : plan.features,
            iconClass: this.getIcon(plan.plan_name)
          }));
        this.updateDisplayPlans();
      },
      error: () => alert('Failed to load subscription plans.')
    });
  }

  updateDisplayPlans(): void {
    const cycle = this.isYearly ? 'Yearly' : 'Monthly';
    this.displayPlans = this.plans.filter(p => p.billing_cycle === cycle);
  }
  getIcon(planName: string): string {
    if (planName.includes('Professional')) return 'fas fa-star';
    if (planName.includes('Basic')) return 'fas fa-layer-group';
    return 'fas fa-bolt';
  }
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  trackByFn(index: number, item: any) {
    return index;
  }
  goToLogin() {
    window.location.href = 'https://app.loancrm.org/#/user/register';
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
