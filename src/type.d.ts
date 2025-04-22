interface NavChild {
  label: string;
  url: string;
}

interface NavItem {
  label: string;
  url: string;
  children?: NavChild[];
}

// types.ts
interface FooterLinkGroup {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

interface NewsletterFormProps {
  onSubmit: (email: string) => void;
}

interface PaymentMethodsProps {
  title: string;
}
