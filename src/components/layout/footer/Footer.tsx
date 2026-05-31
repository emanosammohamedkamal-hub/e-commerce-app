import { Button } from '@/components/ui/button'
 import React from 'react'
 import { Facebook, Github,  MessageCircle,  MessageSquareCode,  Phone,  TelescopeIcon,  Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
 const footerSections = [
  {
    title: 'Pages',
    links: [
      { href: '#', label: 'Home' },
      { href: '#', label: 'Services' },
      { href: '#', label: 'Projects' },
      { href: '#', label: 'News' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '#', label: 'Help center' },
      { href: '#', label: 'Terms of service' },
      { href: '#', label: 'Legal' },
      { href: '#', label: 'Privacy policy' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '#', label: 'hello@blookie.io' },
      { href: '#', label: '+ 46 526 220 0459' },
      { href: '#', label: '+ 46 526 221 0459' },
    ],
  },
];

export default function Footer() {
  return<>
   <footer className="py-16 bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="sm:col-span-3 lg:col-span-2">
            <div>
                  <Link href="/" className='flex gap-2 p-2  bg-white w-fit rounded-2xl'>
                                   <img  src="/freshcart-logo.49f1b44d.svg fill (2).svg"/>    
                         </Link>   
              <p className="text-muted-foreground mt-4 text-sm/6">FreshCart is your one-stop destination for quality products. From<br/> fashion to electronics, we bring you the best brands at competitive<br/> prices with a seamless shopping experience.</p>
              <ul>
                <li>
                  <Phone/>  01(800) 123-4567

                </li>

                  <li>
                  <MessageSquareCode/>  01(800) 123-4567
                   
                </li>

                  <li>
                  <Phone/>  01(800) 123-4567
                   
                </li>
              </ul>
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-base font-semibold tracking-tight">{section.title}</h3>
              <div className="mt-6 flex flex-col items-start gap-2">
                {section.links.map((link) => (
                  <Button key={link.label} asChild size="sm" variant={'ghost'} className="text-muted-foreground -mx-2">
                    <a href={link.href}>{link.label}</a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-12 mb-6" />
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-muted-foreground text-sm/6">© 2025 Blookie, Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Button asChild variant={'ghost'} size="icon" className="btn-icon-small">
              <a href="#">
                <Facebook />
              </a>
            </Button>
            <Button asChild variant={'ghost'} size="icon" className="btn-icon-small">
              <a href="#">
                <Twitter/>
              </a>
            </Button>
            <Button asChild variant={'ghost'} size="icon" className="btn-icon-small">
              <a href="#">
               </a>
            </Button>
            <Button asChild variant={'ghost'} size="icon" className="btn-icon-small">
              <a href="#">
                <Youtube />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  
  
  
  
  
  
  
  
  
  
  
  
  </> 
}
