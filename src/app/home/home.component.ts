import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ContactService } from '../contact.service';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';

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
    goToFeatures(feature: string): void {
    this.router.navigate(['/features'], { queryParams: { feature: feature } });
  }
  features = [
    { title: 'Best Price', subtitle: 'Cost effective for Consultants' },
    { title: 'Flexible Subscription', subtitle: 'No lock-in and price hikes' },
    { title: 'Ease of Use', subtitle: 'Easy understandable UI' },
    { title: 'Easy Adoption', subtitle: 'Onboarding, Multiple Trainings' }
  ];
  redirectToHRM(): void {
    this.router.navigate(['/hrm']);
  }

  //  cards = [
  //   { title: '', content: '"MyLoanCRM has completely transformed the way I manage leads and customers. Earlier, tracking loan files and follow-ups was a headache, but now everything is automated."', title2:"Rakesh Sharma", para:"SNV Finkart, DSA Owner, Delhi"},
  //   { title: '', content: '“This CRM is built for loan DSAs like us. From lead generation to disbursal tracking, everything is so simple and organized. My conversion rates improved by 40% after using MyLoanCRM.”', title2:"Suresh Reddy", para:" DSA Owner, Cred Talk, Banglore,"},
  //   { title: '', content: '“The WhatsApp integration is a game changer! Following up with clients has become super easy, and I never miss a lead. MyLoanCRM is truly a one-stop solution for loan professionals.”',title2:"Anita Verma",para:"DSA Aggregator, Banglore"},
  //   { title: '', content: '“Earlier, we struggled with data security and follow-ups. With MyLoanCRM, our customer data is safe, and automated reminders ensure no lead is missed. A must-have for DSAs!”',title2:"Priya sharma",para:"Loan Consultant, Delhi" },
  //   { title: '', content: '“MyLoanCRM helped us build trust with lenders and customers by offering complete transparency. Loan approvals are faster, and our team is more productive. My team is saving hours every day!”',title2:"Sneha Kulkarni",para:"Fintech Partner, Bangalore" }
  // ];

  testimonials = [
    {
      quote: 'MyLoanCRM has completely transformed the way I manage leads and customers. Earlier, tracking loan files and follow-ups was a headache, but now everything is automated. My team is saving hours every day!',
      name: 'Rakesh Sharma',
      title: 'SNV Finkart, DSA Owner, Delhi'
    },
    {
      quote: 'This CRM is built for loan DSAs like us. From lead generation to disbursal tracking, everything is so simple and organized. My conversion rates improved by 40% after using MyLoanCRM.',
      name: 'Suresh Reddy',
      title: 'DSA Owner, Cred Talk, Bangalore'
    },
    {
      quote: 'The WhatsApp integration is a game changer! Following up with clients has become super easy, and I never miss a lead. MyLoanCRM is truly a one-stop solution for loan professionals.',
      name: 'Anita Verma',
      title: 'DSA Aggregator, Bangalore'
    },
    {
      quote: 'Earlier, we struggled with data security and follow-ups. With MyLoanCRM, our customer data is safe, and automated reminders ensure no lead is missed. A must-have for DSAs!',
      name: 'Priya sharma',
      title: 'Loan Consultant, Delhi'
    },
    {
      quote:'MyLoanCRM helped us build trust with lenders and customers by offering complete transparency. Loan approvals are faster, and our team is more productive.',
      name:'Sneha Kulkarni',
      title:'Fintech Partner, Bangalore',
    }
  ];

    responsiveOptions = [
    { breakpoint: '1199px', numVisible: 3, numScroll: 1},
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

   @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
   private autoScrollInterval: any;  // Store the interval reference
  scrollAmount = 300;  // Amount to scroll each time
  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  typingSpeed = 150;
  deletingSpeed = 50;
  pauseBeforeDeleting = 1500;

  carouselImages = [
    // 'assets/images/1.png',
    // 'assets/images/2.png',
    // 'assets/images/3.png'
    'assets/images/img11',
    // 'assets/images/img12',
    // 'assets/images/img123'
  ];
  leadsManaged = 250000;
  employeesManaged = 12000; isMobileMenuActive = false;
  clients = 300;
  title = "wintech"
  faqs = [
    {
      question: 'What is MyLoanCRM?',
      answer: "A loan management CRM that helps DSAs, NBFCs, and lenders manage leads, credit checks, and disbursements in one place."
,
      open: false
    },
    {
      question: 'Who can use MyLoanCRM?',
      answer: 'Loan DSAs, NBFCs, Banks, Fintechs, and lending startups of any size.',
      open: false
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes. We use encryption, role-based access, and secure cloud servers to keep your data 100% protected.',
      open: false
    },
    {
      question: 'How much does it cost',
      answer: 'Plans are flexible based on your users & integrations. Contact us for pricing.',
      open: false
    },
    {
      question: 'Can I use it on mobile?',
      answer: 'Yes, MyLoanCRM has a mobile-friendly dashboard and app for agents & managers.',
      open: false
    },

    {
      question: 'How fast can I start?',
      answer: 'Setup usually takes 2–7 days with full onboarding and training.',
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
    'assets/images/img11.svg',
    'assets/images/fileinprocessimg1234.svg',
    'assets/images/img123.svg',
    


    // 'assets/images/clients/hdfc.png',
    // 'assets/images/clients/scb.png',
    // 'assets/images/clients/icici.png',
    // 'assets/images/clients/kotak.png',
    // 'assets/images/clients/axis.png',
    // 'assets/images/clients/yes.png',
    // 'assets/images/clients/bajaj.png',
    // 'assets/images/clients/smfg.png',
    // 'assets/images/clients/ugro.png',
    // 'assets/images/clients/aditya.png',
    // 'assets/images/clients/idfc.png',
    // 'assets/images/clients/indus.png',
    // 'assets/images/clients/tata.png',
    // 'assets/images/clients/muthoot.png',
    // 'assets/images/clients/lending.png',
    // 'assets/images/clients/neo.png',
    // 'assets/images/clients/edel.png',
    // 'assets/images/clients/clix.png',
    // // 'assets/images/clients/indi.png',
    // 'assets/images/clients/hero.png',
    // 'assets/images/clients/poona.png',
    // // 'assets/images/clients/ftcash.png',
    // 'assets/images/clients/arka.png',
    // 'assets/images/clients/bandhan.png',
    // 'assets/images/clients/mas.png',
    // 'assets/images/clients/chola.png',
    // 'assets/images/clients/fed.png',
    // 'assets/images/clients/finplex.png',
    // 'assets/images/clients/godrej.png',
    // 'assets/images/clients/protium.png',
    // 'assets/images/clients/iifl.png',
    // 'assets/images/clients/mahindra.png',
    // 'assets/images/clients/indifi.png',
    // 'assets/images/clients/kinara.png',
    // 'assets/images/clients/karur.png',
    // 'assets/images/clients/lt.png',
    // 'assets/images/clients/unity.png',
    // 'assets/images/clients/piramal.png',
    // 'assets/images/clients/shriram.png',
    // 'assets/images/clients/credit.png'
  ];
  numVisibleItems: number = 1;
  plans: any[] = [];
  displayPlans: any[] = [];
  
  

  workflowSteps = [
    { icon: 'fas fa-bullseye', title: 'Lead Capturing', description: 'Capture leads from multiple channels automatically.' },
    { icon: 'fas fa-folder-open', title: 'Document Collection', description: 'Gather and manage borrower documents securely.' },
    { icon: 'fas fa-credit-card', title: 'Credit Scoring', description: 'Fetch and evaluate credit reports instantly.' },
    { icon: 'fas fa-handshake', title: 'Lender Mapping', description: 'Match applications to suitable lenders automatically.' },
    { icon: 'fas fa-rupee-sign', title: 'Disbursal & Payout', description: 'Track final disbursements and automate commission payouts.' }
  ];
  constructor(private contactservice: ContactService, private router: Router) {
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

   ngAfterViewInit(): void {    // <-- new lifecycle hook method
    
    const state = window.history.state;
    if (state?.scrollToPricing) {
      setTimeout(() => {
        const el = document.getElementById('pricing');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // small delay to ensure element is rendered
    }
    
  }
  


  togglePricing(yearly: boolean): void {
    this.isYearly = yearly;
    this.updateDisplayPlans();
  }
  setVisibleItems(width: number): void {
    if (width < 576) {
      this.numVisibleItems = 1; // extra small
    } else if (width < 768) {
      this.numVisibleItems = 1; // small
    } else if (width < 992) {
      this.numVisibleItems = 1; // medium
    } else if (width < 1200) {
      this.numVisibleItems = 1; // large
    } else {
      this.numVisibleItems = 1; // extra large
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
