"use client";
import { FooterLinkSection } from "@/components/footer/FooterLinkSection";
import { NewsletterForm } from "@/components/footer/NewSeltter";
import { PaymentMethods } from "@/components/footer/PaymentMethod";
import React from "react";
import { LiaFacebook, LiaInstagram } from "react-icons/lia";

interface FooterProps {
  linkGroups: FooterLinkGroup[];
  copyrightText: string;
  socialLinks: {
    platform: string;
    href: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({ linkGroups, copyrightText, socialLinks }) => {
  return (
    <footer className="border-t border-gray-200 bg-[#F8F8F8]  py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {linkGroups.map((group, index) => (
            <FooterLinkSection key={index} linkGroup={group} />
          ))}

          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="mb-4 font-medium text-gray-800">Let&#39;s Keep In Touch</h2>
            <NewsletterForm />
            <PaymentMethods title="Payment Methods" />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-600 md:mb-0">{copyrightText}</p>
            <div className="flex space-x-6">
              <a
                href="/terms"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/sitemap"
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
              >
                Site Map
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.platform}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.platform === "facebook" && <LiaFacebook size={20} />}
                    {link.platform === "instagram" && <LiaInstagram size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
