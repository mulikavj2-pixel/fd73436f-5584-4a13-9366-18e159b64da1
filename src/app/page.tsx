"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="circleGradient"
      cardStyle="noise-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="AutoDrive"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "featured-cars" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit 
          title="Discover Your Perfect Vehicle"
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379245674-5im6sa00.jpg", imageAlt: "Luxury car exterior" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379246915-1ms9krz0.jpg", imageAlt: "Sports car front view" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379248692-dkn7q4ag.jpg", imageAlt: "Professional sedan" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379250281-g8vsrclp.jpg", imageAlt: "Modern vehicle driving" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379251721-g60dtg7b.jpg", imageAlt: "Premium car showroom" }
          ]}
          buttons={[
            { text: "Browse Inventory", href: "featured-cars" },
            { text: "Get Financing", href: "contact" }
          ]}
        />
      </div>
      
      <div id="featured-cars" data-section="featured-cars">
        <ProductCardTwo 
          title="Featured Inventory"
          description="Browse our carefully selected premium vehicles available for immediate purchase"
          products={[
            {
              id: "1",
              brand: "BMW",
              name: "Premium 5 Series Sedan",
              price: "$45,990",
              rating: 5,
              reviewCount: "12.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379253095-n9boo3gl.jpg"
            },
            {
              id: "2",
              brand: "Mercedes-Benz",
              name: "Luxury C-Class Coupe",
              price: "$52,450",
              rating: 5,
              reviewCount: "9.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379254733-42333h0t.png"
            },
            {
              id: "3",
              brand: "Porsche",
              name: "High-Performance 911 Turbo",
              price: "$89,990",
              rating: 5,
              reviewCount: "15.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379256746-xi27ehh8.jpg"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutShowcase 
          title="AutoDrive: Your Trusted Car Dealer"
          description="With over 20 years in the automotive industry, we pride ourselves on delivering quality vehicles and exceptional customer service to thousands of satisfied drivers."
          useCappedBorderRadius={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          leftItem={{
            title: "Expert Selection Process",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379258211-vt6b5c9v.jpg"
          }}
          rightItem={{
            title: "Professional Customer Care",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379259213-r1neddfr.jpg"
          }}
          centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379261255-hmd6cfb9.jpg"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix 
          title="What Our Customers Say"
          description="Real feedback from satisfied car buyers who found their perfect vehicle with AutoDrive"
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              handle: "Bought BMW 5 Series",
              testimonial: "Exceptional service from start to finish. The team made the entire buying process smooth and hassle-free. Highly recommend AutoDrive to anyone looking for quality vehicles.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379262493-ysaf5xyu.jpg"
            },
            {
              id: "2",
              name: "Sarah Anderson",
              handle: "Mercedes-Benz Owner",
              testimonial: "Outstanding customer experience. The staff was knowledgeable and patient, helping me find exactly what I was looking for. Best car dealership I've visited.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379263853-5vfjs845.jpg"
            },
            {
              id: "3",
              name: "Michael Chen",
              handle: "Porsche Enthusiast",
              testimonial: "Top-notch vehicle selection and competitive pricing. The financing options were transparent and flexible. Very impressed with AutoDrive's professionalism.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379264990-bcekorq4.jpg"
            },
            {
              id: "4",
              name: "Jennifer Davis",
              handle: "First-Time Buyer",
              testimonial: "Made my first car purchase stress-free and enjoyable. The team answered all my questions and guided me through every step. Fantastic experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379266009-8ce6cg8o.jpg"
            },
            {
              id: "5",
              name: "David Rodriguez",
              handle: "SUV Buyer",
              testimonial: "Professional, reliable, and trustworthy. Found the perfect family vehicle at a great price. Would definitely come back for my next purchase.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379267292-b9zevuh8.jpg"
            },
            {
              id: "6",
              name: "Emma Wilson",
              handle: "Returning Customer",
              testimonial: "I'm a repeat customer because of the excellent service and quality vehicles. AutoDrive sets the standard for car dealerships. Couldn't be happier.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765379268441-l9lxb59v.jpg"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter 
          tag="Get In Touch"
          title="Ready to Find Your Vehicle?"
          description="Join hundreds of satisfied customers. Subscribe for new inventory updates and exclusive financing offers delivered straight to your inbox."
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy and will never spam you. Unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterCard 
          logoText="AutoDrive"
          copyrightText="© 2025 AutoDrive. All rights reserved. Premium Vehicle Selection."
        />
      </div>
    </ThemeProvider>
  );
}