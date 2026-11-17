import { Component, computed, input, model, signal, viewChildren } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ProductModel } from '../../models/product.model';
import { ProductsList } from '../products-list/products-list';

@Component({
  imports: [Navbar, ProductsList],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  // public name = input(""); // ? -> we Can give it a Default Value if the Parent don't send any name
  // public age = input.required(); // ? -> we Can not give it a Default Value
  // public address = input("No Address", { transform: (value: string | undefined) => value ?? 'No Address' }); // ? -> we Can give it a Default Value
  // public count = model(0);

  // public counter() {
  //   this.count.update(() => {
  //     return this.count() + 1;
  //   });
  // }

  // child = viewChildren(Navbar);


  // public hello() {
  //   this.child()[0].printChildren();
  // }


  smartPhones: ProductModel[] = [
    {
      id: 1,
      name: "iPhone 17 Pro Max",
      price: 1199,
      description: "Apple's latest flagship with A19 Pro chip, stunning camera system, and premium titanium design.",
      discount: 10,
      img: "assets/images/phones/p-1.png"
    },
    {
      id: 2,
      name: "Samsung Galaxy S25 Ultra",
      price: 1299,
      description: "Premium Android smartphone featuring an advanced AI experience, S Pen, and 200MP camera.",
      discount: 15,
      img: "assets/images/phones/p-2.png"
    },
    {
      id: 3,
      name: "Google Pixel 10 Pro",
      price: 999,
      description: "Experience powerful AI features, exceptional photography, and a smooth pure Android experience.",
      discount: 0,
      img: "assets/images/phones/p-3.png"
    },
    {
      id: 4,
      name: "Xiaomi 15 Ultra",
      price: 1099,
      description: "A photography-focused flagship with Leica optics, powerful performance, and a vibrant AMOLED display.",
      discount: 12,
      img: "assets/images/phones/p-4.png"
    },
    {
      id: 5,
      name: "OnePlus 13",
      price: 899,
      description: "High-speed performance with Snapdragon processor, smooth display, and long-lasting battery.",
      discount: 0,
      img: "assets/images/phones/p-5.png"
    },
    {
      id: 6,
      name: "Samsung Galaxy Z Fold7",
      price: 1999,
      description: "A premium foldable smartphone with a large immersive screen and powerful multitasking features.",
      discount: 8,
      img: "assets/images/phones/p-6.png"
    },
    {
      id: 7,
      name: "iPhone 16",
      price: 799,
      description: "Powerful A18 chip, beautiful Super Retina display, and an advanced dual-camera system.",
      discount: 20,
      img: "assets/images/phones/p-7.png"
    },
    {
      id: 8,
      name: "Xiaomi Redmi Note 14 Pro",
      price: 349,
      description: "A stylish mid-range phone with a sharp AMOLED display, excellent camera, and reliable battery.",
      discount: 5,
      img: "assets/images/phones/p-8.png"
    },
    {
      id: 9,
      name: "Samsung Galaxy A56",
      price: 499,
      description: "A balanced smartphone offering a bright Super AMOLED display, great battery life, and smooth performance.",
      discount: 0,
      img: "assets/images/phones/p-9.png"
    },
    {
      id: 10,
      name: "Nothing Phone (3)",
      price: 799,
      description: "Unique transparent-inspired design with Glyph interface, clean software, and capable cameras.",
      discount: 10,
      img: "assets/images/phones/p-10.png"
    },
    {
      id: 11,
      name: "OPPO Reno14 Pro",
      price: 699,
      description: "Elegant design with AI photography tools, stunning AMOLED display, and fast charging technology.",
      discount: 0,
      img: "assets/images/phones/p-11.png"
    },
    {
      id: 12,
      name: "Realme GT 7 Pro",
      price: 749,
      description: "Flagship-level performance with Snapdragon chipset, premium display, and powerful battery.",
      discount: 15,
      img: "assets/images/phones/p-12.png"
    }
  ];

  smartWatches: ProductModel[] = [
    {
      id: 13,
      name: "Apple Watch Ultra 3",
      price: 799,
      description: "Premium rugged smartwatch with advanced health tracking, GPS, and exceptional battery life.",
      discount: 10,
      img: "assets/images/watches/p-1.png"
    },
    {
      id: 14,
      name: "Apple Watch Series 11",
      price: 399,
      description: "Elegant smartwatch with advanced health monitoring, fitness tracking, and a stunning Retina display.",
      discount: 0,
      img: "assets/images/watches/p-2.png"
    },
    {
      id: 15,
      name: "Samsung Galaxy Watch 8 Classic",
      price: 499,
      description: "Classic rotating bezel design with advanced fitness tracking and powerful health monitoring features.",
      discount: 15,
      img: "assets/images/watches/p-3.png"
    },
    {
      id: 16,
      name: "Samsung Galaxy Watch Ultra",
      price: 649,
      description: "Durable outdoor smartwatch with advanced GPS, comprehensive health tracking, and long battery life.",
      discount: 12,
      img: "assets/images/watches/p-4.png"
    },
    {
      id: 17,
      name: "Google Pixel Watch 4",
      price: 349,
      description: "Stylish smartwatch with Fitbit health tracking, Google Assistant, and seamless Android integration.",
      discount: 0,
      img: "assets/images/watches/p-5.png"
    },
    {
      id: 18,
      name: "Garmin Fenix 8",
      price: 999,
      description: "Advanced multisport smartwatch designed for athletes with premium GPS and extensive training metrics.",
      discount: 8,
      img: "assets/images/watches/p-6.png"
    },
    {
      id: 19,
      name: "Huawei Watch GT 5 Pro",
      price: 329,
      description: "Premium smartwatch featuring a titanium design, accurate health monitoring, and impressive battery life.",
      discount: 20,
      img: "assets/images/watches/p-7.png"
    },
    {
      id: 20,
      name: "Xiaomi Watch S4",
      price: 159,
      description: "Affordable smartwatch with a vibrant AMOLED display, fitness tracking, and elegant design.",
      discount: 5,
      img: "assets/images/watches/p-8.png"
    },
    {
      id: 21,
      name: "OnePlus Watch 3",
      price: 329,
      description: "Powerful smartwatch with smooth performance, advanced health features, and long-lasting battery.",
      discount: 0,
      img: "assets/images/watches/p-9.png"
    },
    {
      id: 22,
      name: "Amazfit Balance 2",
      price: 299,
      description: "Smart fitness watch with advanced activity tracking, health insights, and premium AMOLED display.",
      discount: 10,
      img: "assets/images/watches/p-10.png"
    },
    {
      id: 23,
      name: "Nothing CMF Watch Pro 2",
      price: 69,
      description: "Minimalist smartwatch with a customizable design, bright display, and essential fitness features.",
      discount: 0,
      img: "assets/images/watches/p-11.png"
    },
    {
      id: 24,
      name: "Garmin Venu 4",
      price: 549,
      description: "Health-focused smartwatch with advanced fitness analytics, sleep tracking, and a beautiful AMOLED screen.",
      discount: 15,
      img: "assets/images/watches/p-12.png"
    }
  ];

  public isActive = signal<'phone' | 'watch'>('phone');

  public products = computed<ProductModel[]>(() => {
    return [
      ...((this.isActive() !== 'phone')
        ? this.smartWatches
        : this.smartPhones)
    ];
  });
}
