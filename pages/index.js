import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Cart from '../components/Cart'
import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  const [items, setItems] = useState([
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "",
        "german": ""
      },
      "id": 1973,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Vorspeisen aus dem Tandoori Ofen",
        "german": "Vorspeisen aus dem Tandoori Ofen"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Zwiebeln und Kräutern gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Zwiebeln und Kräutern gefüllt, dazu Minzsauce"
          },
          "id": 28986,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Kulcha",
            "german": "Kulcha"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Kartoffeln und Kräutern gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Kartoffeln und Kräutern gefüllt, dazu Minzsauce"
          },
          "id": 28987,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Alu Paratha",
            "german": "Alu Paratha"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Knoblauch und Kräutern gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Knoblauch und Kräutern gefüllt, dazu Minzsauce"
          },
          "id": 28988,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Garlic Nan",
            "german": "Garlic Nan"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Gemüse und Kräutern gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Gemüse und Kräutern gefüllt, dazu Minzsauce"
          },
          "id": 28989,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabji Nan",
            "german": "Sabji Nan"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Rosinen und Mandeln gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Rosinen und Mandeln gefüllt, dazu Minzsauce"
          },
          "id": 28990,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Kashmiri Nan",
            "german": "Kashmiri Nan"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Lammhackfleisch und Kräutern gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Lammhackfleisch und Kräutern gefüllt, dazu Minzsauce"
          },
          "id": 28991,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Keema Nan",
            "german": "Keema Nan"
          },
          "old_price": 4.51,
          "price": 4.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit indischem Weißkäse gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit indischem Weißkäse gefüllt, dazu Minzsauce"
          },
          "id": 28992,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Paneer Nan",
            "german": "Paneer Nan"
          },
          "old_price": 4.51,
          "price": 4.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fladenbrot mit Hähnchenfleisch und Kräutern gefüllt, dazu Minzsauce",
            "german": "Fladenbrot mit Hähnchenfleisch und Kräutern gefüllt, dazu Minzsauce"
          },
          "id": 28993,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Nan",
            "german": "Murgh Nan"
          },
          "old_price": 4.51,
          "price": 4.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indischer Weißkäse mariniert mit Chili, Paprika und Zwiebeln",
            "german": "indischer Weißkäse mariniert mit Chili, Paprika und Zwiebeln"
          },
          "id": 28994,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Chili Paneer Tikka",
            "german": "Chili Paneer Tikka"
          },
          "old_price": 4.51,
          "price": 4.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Tikka Gewürzen marinierte Hähnchenschenkel, dazu Raita",
            "german": "mit Tikka Gewürzen marinierte Hähnchenschenkel, dazu Raita"
          },
          "id": 28995,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Tandoori Murgh",
            "german": "Tandoori Murgh"
          },
          "old_price": 4.51,
          "price": 4.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Tikka Gewürzen marinierte Hähnchenfleisch, dazu Raita",
            "german": "mit Tikka Gewürzen marinierte Hähnchenfleisch, dazu Raita"
          },
          "id": 28996,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tikka",
            "german": "Murgh Tikka"
          },
          "old_price": 5.43,
          "price": 5.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Tikka Gewürzen marinierte Lammfleisch, dazu Raita",
            "german": "mit Tikka Gewürzen marinierte Lammfleisch, dazu Raita"
          },
          "id": 28997,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Tikka",
            "german": "Mutton Tikka"
          },
          "old_price": 5.43,
          "price": 5.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammhackfleisch am Spieß gegrillt mit Weißkohl und Erbsen, dazu Raita",
            "german": "Lammhackfleisch am Spieß gegrillt mit Weißkohl und Erbsen, dazu Raita"
          },
          "id": 28998,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Seekh Kebab",
            "german": "Seekh Kebab"
          },
          "old_price": 5.43,
          "price": 5.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Tikka Gewürzen marinierte Garnelen, dazu Raita",
            "german": "mit Tikka Gewürzen marinierte Garnelen, dazu Raita"
          },
          "id": 28999,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Tikka",
            "german": "Jinga Tikka"
          },
          "old_price": 10.03,
          "price": 10.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": false,
        "order_type_": [
          "DELIVERY",
          "DINEIN"
        ]
      },
      "description_json": {
        "english": "Test product",
        "german": "Test product"
      },
      "id": 1988,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Multi option Product ? ? ? ? ?",
        "german": "Multi option Product ? ? ? ? ?"
      },
      "products": [
        {
          "choice": [
            {
              "choice": [
                29154,
                29155,
                29156
              ],
              "has_products": true,
              "name_json": {
                "english": "Choice",
                "german": "Wahl"
              },
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "Test ",
            "german": "Test "
          },
          "id": 29153,
          "image": null,
          "in_stock": true,
          "is_popular": true,
          "name_json": {
            "english": "Menu product ÜÖÄß",
            "german": "Menu product ÜÖÄß"
          },
          "old_price": 23.0,
          "price": 25.0,
          "side_products_json": [],
          "sku": "91",
          "type_": "MULTIPLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Minzsauce serviert.",
        "german": "Jedes Gericht wird mit Minzsauce serviert."
      },
      "id": 1972,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Vorspeisen",
        "german": "Vorspeisen"
      },
      "products": [
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Option 1",
                "german": "Option 1"
              },
              "options": [
                {
                  "name_json": {
                    "english": "o - 1",
                    "german": "o - 1"
                  },
                  "price": 0.5
                },
                {
                  "name_json": {
                    "english": "o - 2",
                    "german": "o - 2"
                  },
                  "price": 1.0
                },
                {
                  "name_json": {
                    "english": "o - 3",
                    "german": "o - 3"
                  },
                  "price": 1.5
                }
              ],
              "type_": "SINGLE"
            },
            {
              "has_products": false,
              "name_json": {
                "english": "Option 2",
                "german": "Option 2"
              },
              "options": [
                {
                  "name_json": {
                    "english": "o - 2.1",
                    "german": "o - 2.1"
                  },
                  "price": 1.0
                },
                {
                  "name_json": {
                    "english": "o - 2.2",
                    "german": "o - 2.2"
                  },
                  "price": 1.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "knusprige Linsenwaffeln mit Kreuzkümmel",
            "german": "knusprige Linsenwaffeln mit Kreuzkümmel"
          },
          "id": 28971,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Papadams",
            "german": "Papadams"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [
            {
              "name_json": {
                "english": "Side 1",
                "german": "Side 1"
              },
              "option_ids": [
                29157,
                29158,
                29159
              ],
              "type_": "MULTIPLE"
            },
            {
              "name_json": {
                "english": "Side 2",
                "german": "Side 2"
              },
              "option_ids": [
                29157,
                29158
              ],
              "type_": "MULTIPLE"
            }
          ],
          "sku": "null",
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "frittiertes Linsen-Rundgebäck mit Chili-Minzsauce",
            "german": "frittiertes Linsen-Rundgebäck mit Chili-Minzsauce"
          },
          "id": 28972,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Vada",
            "german": "Vada"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "frittiertes indisches Brot mit Kartoffelfüllung",
            "german": "frittiertes indisches Brot mit Kartoffelfüllung"
          },
          "id": 28973,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Alu Pury",
            "german": "Alu Pury"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Pasteten gefüllt mit Kartoffeln, Kräutern und Erbsen",
            "german": "Pasteten gefüllt mit Kartoffeln, Kräutern und Erbsen"
          },
          "id": 28974,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Samosas (vegetarisch)",
            "german": "Samosas (vegetarisch)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Pasteten mit Hähnchenfleisch gefüllt",
            "german": "Pasteten mit Hähnchenfleisch gefüllt"
          },
          "id": 28975,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Gỏi cuốn mit Tofu und gebratene Eier",
            "german": "Gỏi cuốn mit Tofu und gebratene Eier"
          },
          "old_price": 4.14,
          "price": 4.5,
          "side_products_json": [],
          "sku": "null",
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Pasteten mit Lammfleisch gefüllt",
            "german": "Pasteten mit Lammfleisch gefüllt"
          },
          "id": 28976,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Samosas",
            "german": "Mutton Samosas"
          },
          "old_price": 4.6,
          "price": 5.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchen-Spieße mit Chilisauce",
            "german": "Hähnchen-Spieße mit Chilisauce"
          },
          "id": 28977,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Curry Spieße",
            "german": "Murgh Curry Spieße"
          },
          "old_price": 4.6,
          "price": 5.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "",
            "german": ""
          },
          "id": 28978,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Pakora mit Blumenkohl (6 Stück)",
            "german": "Pakora mit Blumenkohl (6 Stück)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "",
            "german": ""
          },
          "id": 28979,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Pakora mit Zwiebeln (6 Stück)",
            "german": "Pakora mit Zwiebeln (6 Stück)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "",
            "german": ""
          },
          "id": 28980,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Pakora mit Auberginen (6 Stück)",
            "german": "Pakora mit Auberginen (6 Stück)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "",
            "german": ""
          },
          "id": 28981,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Pakora mit Kartoffeln (6 Stück)",
            "german": "Pakora mit Kartoffeln (6 Stück)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Blumenkohl, Zwiebeln, Auberginen und Kartoffeln",
            "german": "mit Blumenkohl, Zwiebeln, Auberginen und Kartoffeln"
          },
          "id": 28982,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabji Pakora",
            "german": "Sabji Pakora"
          },
          "old_price": 3.68,
          "price": 4.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit hausgemachtem indischen Weißkäse",
            "german": "mit hausgemachtem indischen Weißkäse"
          },
          "id": 28983,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Paneer Pakora",
            "german": "Paneer Pakora"
          },
          "old_price": 4.14,
          "price": 4.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Hähnchenbrustfleisch",
            "german": "mit Hähnchenbrustfleisch"
          },
          "id": 28984,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Pakora",
            "german": "Murgh Pakora"
          },
          "old_price": 4.14,
          "price": 4.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Papadam, Samosa, Alu Pury, Pakora mit Blumenkohl, Pakora mit Zwiebeln und Pakora mit Auberginen",
            "german": "mit Papadam, Samosa, Alu Pury, Pakora mit Blumenkohl, Pakora mit Zwiebeln und Pakora mit Auberginen"
          },
          "id": 28985,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Gemischte Platte",
            "german": "Gemischte Platte"
          },
          "old_price": 6.9,
          "price": 7.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "",
        "german": ""
      },
      "id": 1974,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Suppen",
        "german": "Suppen"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Suppe aus gelben Linsen und Kurkuma",
            "german": "Suppe aus gelben Linsen und Kurkuma"
          },
          "id": 29000,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Dal Surba",
            "german": "Dal Surba"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Kokosmilchsuppe mit Linsen nach Ceylon Art",
            "german": "Kokosmilchsuppe mit Linsen nach Ceylon Art"
          },
          "id": 29001,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Nariyel Surba",
            "german": "Nariyel Surba"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indische Gemüsesuppe mit frischem Koriander",
            "german": "indische Gemüsesuppe mit frischem Koriander"
          },
          "id": 29002,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabji Surba (mild)",
            "german": "Sabji Surba (mild)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Tomatensuppe nach Kaschmir Art",
            "german": "Tomatensuppe nach Kaschmir Art"
          },
          "id": 29003,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Tomato Surba (mild)",
            "german": "Tomato Surba (mild)"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indische Hähnchensuppe",
            "german": "indische Hähnchensuppe"
          },
          "id": 29004,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Yakhni Surba (scharf)",
            "german": "Yakhni Surba (scharf)"
          },
          "old_price": 3.68,
          "price": 4.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jeder Salat wird mit einem Dressing Ihrer Wahl serviert.",
        "german": "Jeder Salat wird mit einem Dressing Ihrer Wahl serviert."
      },
      "id": 1975,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Salate",
        "german": "Salate"
      },
      "products": [
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "mit Paprika, Tomaten, Gurken, Karotten, Zwiebeln und Kräutern",
            "german": "mit Paprika, Tomaten, Gurken, Karotten, Zwiebeln und Kräutern"
          },
          "id": 29005,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mix Salat",
            "german": "Mix Salat"
          },
          "old_price": 6.35,
          "price": 6.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "gemischter Salat mit frischem Ingwer",
            "german": "gemischter Salat mit frischem Ingwer"
          },
          "id": 29006,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Punjabi Salat",
            "german": "Punjabi Salat"
          },
          "old_price": 6.35,
          "price": 6.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "mit klein gehackten Tomaten, Gurken, Paprika und Koriander mit indischem Öl angemacht",
            "german": "mit klein gehackten Tomaten, Gurken, Paprika und Koriander mit indischem Öl angemacht"
          },
          "id": 29007,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Khan Salat",
            "german": "Khan Salat"
          },
          "old_price": 6.35,
          "price": 6.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "gemischter Salat mit frischer Ananas und indischem Käse",
            "german": "gemischter Salat mit frischer Ananas und indischem Käse"
          },
          "id": 29008,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Ananas Salat",
            "german": "Ananas Salat"
          },
          "old_price": 6.35,
          "price": 6.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "gemischter Salat mit frischer Mango und Chili-Hähnchenstücken",
            "german": "gemischter Salat mit frischer Mango und Chili-Hähnchenstücken"
          },
          "id": 29009,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mango Salat",
            "german": "Mango Salat"
          },
          "old_price": 6.35,
          "price": 6.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "gemischter Salat mit Hähnchenbruststücken in Koriander-Chilisauce",
            "german": "gemischter Salat mit Hähnchenbruststücken in Koriander-Chilisauce"
          },
          "id": 29010,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Dhaniya Salat",
            "german": "Dhaniya Salat"
          },
          "old_price": 7.27,
          "price": 7.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "gemischter Salat mit Tandoori Hähnchenbruststücken",
            "german": "gemischter Salat mit Tandoori Hähnchenbruststücken"
          },
          "id": 29011,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "White Elefant Salat",
            "german": "White Elefant Salat"
          },
          "old_price": 7.73,
          "price": 8.4,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [
            {
              "has_products": false,
              "name_json": {
                "english": "Dressing",
                "german": "Dressing"
              },
              "options": [
                {
                  "name_json": {
                    "english": "mit Joghurt-Dressing, hausgemacht",
                    "german": "mit Joghurt-Dressing, hausgemacht"
                  },
                  "price": 0.0
                },
                {
                  "name_json": {
                    "english": "mit Kräuter-Dressing, hausgemacht",
                    "german": "mit Kräuter-Dressing, hausgemacht"
                  },
                  "price": 0.0
                }
              ],
              "type_": "SINGLE"
            }
          ],
          "description_json": {
            "english": "gemischter Salat mit gebratenen Garnelen",
            "german": "gemischter Salat mit gebratenen Garnelen"
          },
          "id": 29012,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Salat",
            "german": "Jinga Salat"
          },
          "old_price": 8.74,
          "price": 9.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Raita serviert.",
        "german": "Jedes Gericht wird mit Raita serviert."
      },
      "id": 1976,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Biryani Gerichte",
        "german": "Biryani Gerichte"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "gebratenes Gemüse mit Basmatireis",
            "german": "gebratenes Gemüse mit Basmatireis"
          },
          "id": 29013,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabji Biryani",
            "german": "Sabji Biryani"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gedünstetes Hähnchenfleisch mit Basmatireis",
            "german": "gedünstetes Hähnchenfleisch mit Basmatireis"
          },
          "id": 29014,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Biryani",
            "german": "Murgh Biryani"
          },
          "old_price": 11.5,
          "price": 12.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gedünstetes Lammfleisch mit Basmatireis",
            "german": "gedünstetes Lammfleisch mit Basmatireis"
          },
          "id": 29015,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Biryani",
            "german": "Mutton Biryani"
          },
          "old_price": 12.42,
          "price": 13.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gedünstete Garnelen mit Basmatireis",
            "german": "gedünstete Garnelen mit Basmatireis"
          },
          "id": 29016,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Biryani",
            "german": "Jinga Biryani"
          },
          "old_price": 12.42,
          "price": 13.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Basmatireis serviert.",
        "german": "Jedes Gericht wird mit Basmatireis serviert."
      },
      "id": 1977,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Hähnchenfleisch",
        "german": "Hähnchenfleisch"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Zwiebeln, Tomaten und Kräutern in Currysauce",
            "german": "Hähnchenfleisch mit Zwiebeln, Tomaten und Kräutern in Currysauce"
          },
          "id": 29017,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Karahi",
            "german": "Murgh Karahi"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Gemüse und Koriander",
            "german": "Hähnchenfleisch mit Gemüse und Koriander"
          },
          "id": 29018,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Sabji",
            "german": "Murgh Sabji"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Spinat, Zwiebel und Ingwer in pikanter Sauce",
            "german": "Hähnchenfleisch mit Spinat, Zwiebel und Ingwer in pikanter Sauce"
          },
          "id": 29019,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Palak",
            "german": "Murgh Palak"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit einer würziger Sauce und pürierten Senfblättern",
            "german": "Hähnchenfleisch mit einer würziger Sauce und pürierten Senfblättern"
          },
          "id": 29020,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Saag",
            "german": "Murgh Saag"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Tomaten in pikanter Methisauce",
            "german": "Hähnchenfleisch mit Tomaten in pikanter Methisauce"
          },
          "id": 29021,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Meti",
            "german": "Murgh Meti"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit indischem Wildgemüse und Ingwer in pikanter Currysauce",
            "german": "Hähnchenfleisch mit indischem Wildgemüse und Ingwer in pikanter Currysauce"
          },
          "id": 29022,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tinda",
            "german": "Murgh Tinda"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Eierkürbis in pikanter Sauce",
            "german": "Hähnchenfleisch mit Eierkürbis in pikanter Sauce"
          },
          "id": 29023,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Kaddo",
            "german": "Murgh Kaddo"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mariniertes Hähnchenfleisch in Joghurt-Paprikasauce",
            "german": "mariniertes Hähnchenfleisch in Joghurt-Paprikasauce"
          },
          "id": 29024,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Masala",
            "german": "Murgh Masala"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gegrilltes Hähnchenfleisch mit Weißkohl und Erbsen in pikanter Sauce",
            "german": "gegrilltes Hähnchenfleisch mit Weißkohl und Erbsen in pikanter Sauce"
          },
          "id": 29025,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tikka Masala",
            "german": "Murgh Tikka Masala"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit sauer-scharfer Gemüse-Picklesauce",
            "german": "Hähnchenfleisch mit sauer-scharfer Gemüse-Picklesauce"
          },
          "id": 29026,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Achar",
            "german": "Murgh Achar"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenschenkelfleisch mit Zwiebeln und Koriander in Minzsauce",
            "german": "Hähnchenschenkelfleisch mit Zwiebeln und Koriander in Minzsauce"
          },
          "id": 29027,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Doh Piazza",
            "german": "Murgh Doh Piazza"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Kokosmilch, Erbsen und Koriander nach Ceylon Art",
            "german": "Hähnchenfleisch mit Kokosmilch, Erbsen und Koriander nach Ceylon Art"
          },
          "id": 29028,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Ceylon Murgh",
            "german": "Ceylon Murgh"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Zimt, Erbsen und Ingwer nach süd-indischer Rezeptur",
            "german": "Hähnchenfleisch mit Zimt, Erbsen und Ingwer nach süd-indischer Rezeptur"
          },
          "id": 29029,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Madras (sehr scharf)",
            "german": "Murgh Madras (sehr scharf)"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Kartoffeln und Erbsen in extra scharfer Sauce",
            "german": "Hähnchenfleisch mit Kartoffeln und Erbsen in extra scharfer Sauce"
          },
          "id": 29030,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Vindaloo",
            "german": "Murgh Vindaloo"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Basilikum und Ingwer in Chili-Sahnesauce",
            "german": "Hähnchenfleisch mit Basilikum und Ingwer in Chili-Sahnesauce"
          },
          "id": 29031,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tulsi",
            "german": "Murgh Tulsi"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch in Erdnuss-Cremesauce mit milden Gewürzen",
            "german": "Hähnchenfleisch in Erdnuss-Cremesauce mit milden Gewürzen"
          },
          "id": 29032,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Peanuts",
            "german": "Murgh Peanuts"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gegrilltes mariniertes Hähnchenfleisch mit Nüssen in Munglaisauce",
            "german": "gegrilltes mariniertes Hähnchenfleisch mit Nüssen in Munglaisauce"
          },
          "id": 29033,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Jaipuri",
            "german": "Murgh Jaipuri"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Nelken und Lorbeerblättern in Nuss-Sahnesauce",
            "german": "Hähnchenfleisch mit Nelken und Lorbeerblättern in Nuss-Sahnesauce"
          },
          "id": 29034,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Korma",
            "german": "Murgh Korma"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenschenkelfleisch mit Butter in Tomatensauce",
            "german": "Hähnchenschenkelfleisch mit Butter in Tomatensauce"
          },
          "id": 29035,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Butter Murgh",
            "german": "Butter Murgh"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch in süßer Mango-Currysauce",
            "german": "Hähnchenfleisch in süßer Mango-Currysauce"
          },
          "id": 29036,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mango Murgh",
            "german": "Mango Murgh"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Mandarinen und Mandeln in süßer Currysauce",
            "german": "Hähnchenfleisch mit Mandarinen und Mandeln in süßer Currysauce"
          },
          "id": 29037,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Mandarine",
            "german": "Murgh Mandarine"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch mit Bananen, Zimt und Kardamon in Curry-Sahnesauce",
            "german": "Hähnchenfleisch mit Bananen, Zimt und Kardamon in Curry-Sahnesauce"
          },
          "id": 29038,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Kashmir Murgh",
            "german": "Kashmir Murgh"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenfleisch und Obststücke in süßer Safransauce",
            "german": "Hähnchenfleisch und Obststücke in süßer Safransauce"
          },
          "id": 29039,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bengal Murgh",
            "german": "Bengal Murgh"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Basmatireis serviert.",
        "german": "Jedes Gericht wird mit Basmatireis serviert."
      },
      "id": 1978,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Lammfleisch",
        "german": "Lammfleisch"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Zwiebeln, Tomaten und Knoblauch in Currysauce",
            "german": "Lammfleisch mit Zwiebeln, Tomaten und Knoblauch in Currysauce"
          },
          "id": 29040,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Karahi",
            "german": "Mutton Karahi"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Spinat, Zwiebeln und Ingwer in pikanter Sauce",
            "german": "Lammfleisch mit Spinat, Zwiebeln und Ingwer in pikanter Sauce"
          },
          "id": 29041,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Palak",
            "german": "Mutton Palak"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Okraschoten und indischen Gewürzen",
            "german": "Lammfleisch mit Okraschoten und indischen Gewürzen"
          },
          "id": 29042,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bindi Mutton",
            "german": "Bindi Mutton"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Gemüse in Currysauce",
            "german": "Lammfleisch mit Gemüse in Currysauce"
          },
          "id": 29043,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Jal Farezi",
            "german": "Mutton Jal Farezi"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammhackbällchen mit Zwiebeln und Erbsen in Tomaten-Currysauce",
            "german": "Lammhackbällchen mit Zwiebeln und Erbsen in Tomaten-Currysauce"
          },
          "id": 29044,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Keema",
            "german": "Mutton Keema"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch in Joghurt-Paprikasauce",
            "german": "Lammfleisch in Joghurt-Paprikasauce"
          },
          "id": 29045,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Masala",
            "german": "Mutton Masala"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Weißkohl und Erbsen in pikanter Sauce",
            "german": "Lammfleisch mit Weißkohl und Erbsen in pikanter Sauce"
          },
          "id": 29046,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Tikka Masala",
            "german": "Mutton Tikka Masala"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch in Kokosmilchsauce mit Erbsen und Koriander nach Ceylon Art",
            "german": "Lammfleisch in Kokosmilchsauce mit Erbsen und Koriander nach Ceylon Art"
          },
          "id": 29047,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Ceylon Mutton",
            "german": "Ceylon Mutton"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Zimt, Ingwer und Kardamon nach südindischer Rezeptur",
            "german": "Lammfleisch mit Zimt, Ingwer und Kardamon nach südindischer Rezeptur"
          },
          "id": 29048,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Madras",
            "german": "Mutton Madras"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch und Kartoffeln in extra scharfer Sauce",
            "german": "Lammfleisch und Kartoffeln in extra scharfer Sauce"
          },
          "id": 29049,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Vindaloo",
            "german": "Mutton Vindaloo"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Nelken und Lorbeerblättern in Nuss-Sahnesauce",
            "german": "Lammfleisch mit Nelken und Lorbeerblättern in Nuss-Sahnesauce"
          },
          "id": 29050,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Korma",
            "german": "Mutton Korma"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch mit Bananen, Zimt und Kardamon in Curry-Sahnesauce",
            "german": "Lammfleisch mit Bananen, Zimt und Kardamon in Curry-Sahnesauce"
          },
          "id": 29051,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Kashmir Mutton",
            "german": "Kashmir Mutton"
          },
          "old_price": 13.71,
          "price": 14.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Basmatireis serviert.",
        "german": "Jedes Gericht wird mit Basmatireis serviert."
      },
      "id": 1979,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Entengerichte",
        "german": "Entengerichte"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Kokosraspeln, gegart in einer südindischen roten Currysauce",
            "german": "Entenfleisch mit Kokosraspeln, gegart in einer südindischen roten Currysauce"
          },
          "id": 29052,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Reshmi Batak (scharf)",
            "german": "Reshmi Batak (scharf)"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Butter und Tomaten nach nordindischer Art",
            "german": "Entenfleisch mit Butter und Tomaten nach nordindischer Art"
          },
          "id": 29053,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Butter Masala",
            "german": "Batak Butter Masala"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Paprika und Zwiebeln in scharfer Erdnusssauce",
            "german": "Entenfleisch mit Paprika und Zwiebeln in scharfer Erdnusssauce"
          },
          "id": 29054,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Peanuts",
            "german": "Batak Peanuts"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Mandarinen und Mandeln in süßer Currysauce",
            "german": "Entenfleisch mit Mandarinen und Mandeln in süßer Currysauce"
          },
          "id": 29055,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Mandarine",
            "german": "Batak Mandarine"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Zwiebeln, Knoblauch, Zitronenblättern in Currysauce",
            "german": "Entenfleisch mit Zwiebeln, Knoblauch, Zitronenblättern in Currysauce"
          },
          "id": 29056,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Ghosth",
            "german": "Batak Ghosth"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Broccoli, Zwiebeln und Ingwer in pikanter Sauce",
            "german": "Entenfleisch mit Broccoli, Zwiebeln und Ingwer in pikanter Sauce"
          },
          "id": 29057,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Broccoli",
            "german": "Batak Broccoli"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Ingwer und Champignons in pikanter Sauce",
            "german": "Entenfleisch mit Ingwer und Champignons in pikanter Sauce"
          },
          "id": 29058,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Ingwer",
            "german": "Batak Ingwer"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Paprika, Erbsen und Auberginen in kräftiger Currysauce",
            "german": "Entenfleisch mit Paprika, Erbsen und Auberginen in kräftiger Currysauce"
          },
          "id": 29059,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Jal Farezi",
            "german": "Batak Jal Farezi"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch in Kokosmilchsauce mit Erbsen und Koriander nach Ceylon Art",
            "german": "Entenfleisch in Kokosmilchsauce mit Erbsen und Koriander nach Ceylon Art"
          },
          "id": 29060,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Ceylon Batak",
            "german": "Ceylon Batak"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Erbsen und Ingwer nach südindischer Art",
            "german": "Entenfleisch mit Erbsen und Ingwer nach südindischer Art"
          },
          "id": 29061,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Madras (scharf)",
            "german": "Batak Madras (scharf)"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Entenfleisch mit Kartoffeln und Erbsen in extra scharfer Sauce",
            "german": "Entenfleisch mit Kartoffeln und Erbsen in extra scharfer Sauce"
          },
          "id": 29062,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Batak Vindaloo",
            "german": "Batak Vindaloo"
          },
          "old_price": 14.63,
          "price": 15.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Nan Brot und Raita-Sauce serviert.",
        "german": "Jedes Gericht wird mit Nan Brot und Raita-Sauce serviert."
      },
      "id": 1980,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Tandoori Gerichte",
        "german": "Tandoori Gerichte"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "hausgemachter indischer Weißkäse, mariniert mit Chili",
            "german": "hausgemachter indischer Weißkäse, mariniert mit Chili"
          },
          "id": 29063,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Paneer Tikka",
            "german": "Paneer Tikka"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenschenkel aus dem Tandoori Ofen mit Erbsen und Weißkohl",
            "german": "Hähnchenschenkel aus dem Tandoori Ofen mit Erbsen und Weißkohl"
          },
          "id": 29064,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tandoori",
            "german": "Murgh Tandoori"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mariniertes Hähnchenfleisch aus dem Tandoor Ofen mit Erbsen und Weißkohl",
            "german": "mariniertes Hähnchenfleisch aus dem Tandoor Ofen mit Erbsen und Weißkohl"
          },
          "id": 29065,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tikka",
            "german": "Murgh Tikka"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Hähnchenbrust mit Minze und Spinat",
            "german": "Hähnchenbrust mit Minze und Spinat"
          },
          "id": 29066,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Tikka Haryali",
            "german": "Murgh Tikka Haryali"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mariniertes Lammfleisch aus dem Tandoor Ofen mit Erbsen und Weißkohl",
            "german": "mariniertes Lammfleisch aus dem Tandoor Ofen mit Erbsen und Weißkohl"
          },
          "id": 29067,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Tikka",
            "german": "Mutton Tikka"
          },
          "old_price": 13.34,
          "price": 14.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lammfleisch am Spieß aus dem Tandoor Ofen mit Erbsen und Weißkohl",
            "german": "Lammfleisch am Spieß aus dem Tandoor Ofen mit Erbsen und Weißkohl"
          },
          "id": 29068,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sheek Kebab",
            "german": "Sheek Kebab"
          },
          "old_price": 13.34,
          "price": 14.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Lamm, Huhn, Sheek Kebab und Garnelen aus dem Ofen mit Beilagensalat",
            "german": "Lamm, Huhn, Sheek Kebab und Garnelen aus dem Ofen mit Beilagensalat"
          },
          "id": 29069,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "White Elefant Mixed Grill",
            "german": "White Elefant Mixed Grill"
          },
          "old_price": 17.39,
          "price": 18.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "marinierte Garnelen aus dem Tandoor Ofen mit Beilagensalat",
            "german": "marinierte Garnelen aus dem Tandoor Ofen mit Beilagensalat"
          },
          "id": 29070,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Tikka",
            "german": "Jinga Tikka"
          },
          "old_price": 21.62,
          "price": 23.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Ananas und Linsen zubereitet.",
        "german": "Jedes Gericht wird mit Ananas und Linsen zubereitet."
      },
      "id": 1981,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Dhansak Gerichte",
        "german": "Dhansak Gerichte"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "mit Gemüse, Ananas, Linsen und Koriander",
            "german": "mit Gemüse, Ananas, Linsen und Koriander"
          },
          "id": 29071,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabji Dhansak (süß-sauer)",
            "german": "Sabji Dhansak (süß-sauer)"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Hähnchenfleisch, Ananas, Linsen und Koriander",
            "german": "mit Hähnchenfleisch, Ananas, Linsen und Koriander"
          },
          "id": 29072,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Murgh Dhansak (süß-sauer)",
            "german": "Murgh Dhansak (süß-sauer)"
          },
          "old_price": 11.5,
          "price": 12.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Lammfleisch, Ananas, Linsen und Koriander",
            "german": "mit Lammfleisch, Ananas, Linsen und Koriander"
          },
          "id": 29073,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mutton Dhansak (süß-sauer)",
            "german": "Mutton Dhansak (süß-sauer)"
          },
          "old_price": 12.42,
          "price": 13.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Riesengarnelen, Ananas, Linsen und Koriander",
            "german": "mit Riesengarnelen, Ananas, Linsen und Koriander"
          },
          "id": 29074,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Dhansak (süß-sauer)",
            "german": "Jinga Dhansak (süß-sauer)"
          },
          "old_price": 16.1,
          "price": 17.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Pillaureis serviert.",
        "german": "Jedes Gericht wird mit Pillaureis serviert."
      },
      "id": 1982,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Fischgerichte und Schalentiere",
        "german": "Fischgerichte und Schalentiere"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Rotbarschfilet mit Broccoli in Kokos-Sahnesauce",
            "german": "Rotbarschfilet mit Broccoli in Kokos-Sahnesauce"
          },
          "id": 29075,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Karela Machli",
            "german": "Karela Machli"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Seelachsfilet mit Koriander, Zwiebeln und Ingwer",
            "german": "Seelachsfilet mit Koriander, Zwiebeln und Ingwer"
          },
          "id": 29076,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Goa Machli",
            "german": "Goa Machli"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Garnelen mit Paprika in Nuss-Sahnesauce",
            "german": "Garnelen mit Paprika in Nuss-Sahnesauce"
          },
          "id": 29077,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Korma",
            "german": "Jinga Korma"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Garnelen mit Spinat, Zwiebeln und Ingwer in pikanter Sauce",
            "german": "Garnelen mit Spinat, Zwiebeln und Ingwer in pikanter Sauce"
          },
          "id": 29078,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Palak",
            "german": "Jinga Palak"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Garnelenfleischbällchen mit Paprika, Zwiebeln und Tomaten",
            "german": "Garnelenfleischbällchen mit Paprika, Zwiebeln und Tomaten"
          },
          "id": 29079,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Jinga Kofta",
            "german": "Jinga Kofta"
          },
          "old_price": 12.79,
          "price": 13.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Riesengarnelen mit Zwiebeln und Paprika in scharfer Currysauce mit Pillaureis",
            "german": "Riesengarnelen mit Zwiebeln und Paprika in scharfer Currysauce mit Pillaureis"
          },
          "id": 29080,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "King Jinga Curry",
            "german": "King Jinga Curry"
          },
          "old_price": 15.18,
          "price": 16.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "bengalische Riesengarnelen mit Paprika, Zwiebeln und Tomaten",
            "german": "bengalische Riesengarnelen mit Paprika, Zwiebeln und Tomaten"
          },
          "id": 29081,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bengal Jinga Curry",
            "german": "Bengal Jinga Curry"
          },
          "old_price": 17.94,
          "price": 19.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "",
        "german": ""
      },
      "id": 1983,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Ayurvedische Speisen",
        "german": "Ayurvedische Speisen"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Gemüsebällchen mit scharfer Currysauce, Jeera und Kurkuma",
            "german": "Gemüsebällchen mit scharfer Currysauce, Jeera und Kurkuma"
          },
          "id": 29082,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabij Kofta",
            "german": "Sabij Kofta"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indische Linsen mit Koriander und asa foedita Gewürzen",
            "german": "indische Linsen mit Koriander und asa foedita Gewürzen"
          },
          "id": 29083,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Dal MIx",
            "german": "Dal MIx"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Okraschoten mit Kartoffeln, Kokossauce und Limettenblättern",
            "german": "Okraschoten mit Kartoffeln, Kokossauce und Limettenblättern"
          },
          "id": 29084,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bindi Alu",
            "german": "Bindi Alu"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Bittergurke mit Linsen, Ingwer, Kurkuma und indischen Gewürzen",
            "german": "Bittergurke mit Linsen, Ingwer, Kurkuma und indischen Gewürzen"
          },
          "id": 29085,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Karella Dal",
            "german": "Karella Dal"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Auberginen mit Kartoffeln, Ingwer, Knoblauch und Chili",
            "german": "Auberginen mit Kartoffeln, Ingwer, Knoblauch und Chili"
          },
          "id": 29086,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Baingan Alu",
            "german": "Baingan Alu"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Broccoli mit Mung Linsen in indischer Basilikumsauce",
            "german": "Broccoli mit Mung Linsen in indischer Basilikumsauce"
          },
          "id": 29087,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Tulsi Broccoli",
            "german": "Tulsi Broccoli"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Blumenkohl mit Karotten, Ghee, Zimt, Limettenblättern und Curry",
            "german": "Blumenkohl mit Karotten, Ghee, Zimt, Limettenblättern und Curry"
          },
          "id": 29088,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Ghobi Gadjer",
            "german": "Ghobi Gadjer"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Spinatbällchen mit Kartoffeln nach Maharashi Art",
            "german": "Spinatbällchen mit Kartoffeln nach Maharashi Art"
          },
          "id": 29089,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Palak Kofta",
            "german": "Palak Kofta"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "roten Bohnen mit Eierkürbis, asa foedita und scharfen Gewürzen",
            "german": "roten Bohnen mit Eierkürbis, asa foedita und scharfen Gewürzen"
          },
          "id": 29090,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Rajma Caddu",
            "german": "Rajma Caddu"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Broccoli mit Kartoffeln, Kräutern und Joghurtsauce",
            "german": "Broccoli mit Kartoffeln, Kräutern und Joghurtsauce"
          },
          "id": 29091,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Alu Broccoli",
            "german": "Alu Broccoli"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Spinat mit Linsen, Zimt, Kardamon und milden Gewürzen",
            "german": "Spinat mit Linsen, Zimt, Kardamon und milden Gewürzen"
          },
          "id": 29092,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Palak Dal",
            "german": "Palak Dal"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Bittergurke mit Kartoffeln, Ingwer und indischen Gewürzen",
            "german": "Bittergurke mit Kartoffeln, Ingwer und indischen Gewürzen"
          },
          "id": 29093,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Karella Alu",
            "german": "Karella Alu"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Kürbis mit Kichererbsen, asa foedita und feinen Gewürzen",
            "german": "Kürbis mit Kichererbsen, asa foedita und feinen Gewürzen"
          },
          "id": 29094,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Kumra Choley",
            "german": "Kumra Choley"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "hausgemachter Käse mit Erbsen, Kurkuma und pikanter Sauce",
            "german": "hausgemachter Käse mit Erbsen, Kurkuma und pikanter Sauce"
          },
          "id": 29095,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Matter Paneer",
            "german": "Matter Paneer"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Spinat mit Sojafleisch, Chee, Zwiebeln und pikanter Sauce",
            "german": "Spinat mit Sojafleisch, Chee, Zwiebeln und pikanter Sauce"
          },
          "id": 29096,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Palak Soya Wadi",
            "german": "Palak Soya Wadi"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "pürierte Auberginen mit Sojafleisch, Zwiebeln und pikanter Sauce",
            "german": "pürierte Auberginen mit Sojafleisch, Zwiebeln und pikanter Sauce"
          },
          "id": 29097,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Baingan Wadi",
            "german": "Baingan Wadi"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "pürierte Senfblätter mit Sojafleisch und pikanter Sauce",
            "german": "pürierte Senfblätter mit Sojafleisch und pikanter Sauce"
          },
          "id": 29098,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Wadi Saag",
            "german": "Wadi Saag"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "hausgemachter Käse mit Joghurtsauce und Masala-Gewürzen",
            "german": "hausgemachter Käse mit Joghurtsauce und Masala-Gewürzen"
          },
          "id": 29099,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Shahi Paneer Masala",
            "german": "Shahi Paneer Masala"
          },
          "old_price": 15.55,
          "price": 16.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "Jedes Gericht wird mit Basmatireis serviert.",
        "german": "Jedes Gericht wird mit Basmatireis serviert."
      },
      "id": 1984,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Vegane und Vegetarische Gerichte",
        "german": "Vegane und Vegetarische Gerichte"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "mit Spinat, Weißkäse und pikanter Sauce",
            "german": "mit Spinat, Weißkäse und pikanter Sauce"
          },
          "id": 29100,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Palak Paneer",
            "german": "Palak Paneer"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "frisches gemischtes Gemüse mit Currysauce",
            "german": "frisches gemischtes Gemüse mit Currysauce"
          },
          "id": 29101,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Sabji Curry",
            "german": "Sabji Curry"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Auberginen püriert mit Kräutern, Zwiebeln und Ingwer",
            "german": "Auberginen püriert mit Kräutern, Zwiebeln und Ingwer"
          },
          "id": 29102,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Baingan Bharta",
            "german": "Baingan Bharta"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Blumenkohl, Kartoffeln, Zwiebeln und Ingwer in Currysauce",
            "german": "mit Blumenkohl, Kartoffeln, Zwiebeln und Ingwer in Currysauce"
          },
          "id": 29103,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Alu Bujpury",
            "german": "Alu Bujpury"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Senfblätter mit Kartoffeln, Butter und Tomaten in Currysauce",
            "german": "Senfblätter mit Kartoffeln, Butter und Tomaten in Currysauce"
          },
          "id": 29104,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Alu Saag",
            "german": "Alu Saag"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Erbsen, Kartoffeln und Tomaten in scharfer Currysauce",
            "german": "mit Erbsen, Kartoffeln und Tomaten in scharfer Currysauce"
          },
          "id": 29105,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Alu Mattar",
            "german": "Alu Mattar"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indisches Wildgemüse in pikanter Sauce mit feinen Gewürzen",
            "german": "indisches Wildgemüse in pikanter Sauce mit feinen Gewürzen"
          },
          "id": 29106,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Tinda Masala",
            "german": "Tinda Masala"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Okraschoten mit Zwiebeln und Ingwer in pikanter Sauce",
            "german": "Okraschoten mit Zwiebeln und Ingwer in pikanter Sauce"
          },
          "id": 29107,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bindi Masala",
            "german": "Bindi Masala"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Okraschoten mit Linsen, Koriander und Ingwer in pikanter Sauce",
            "german": "Okraschoten mit Linsen, Koriander und Ingwer in pikanter Sauce"
          },
          "id": 29108,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bindi Dal",
            "german": "Bindi Dal"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Kichererbsen, Paprika und Zwiebeln in Currysauce",
            "german": "mit Kichererbsen, Paprika und Zwiebeln in Currysauce"
          },
          "id": 29109,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Chana Masala",
            "german": "Chana Masala"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit gelben Linsen, Paprika, Zwiebeln und Koriander in Currysauce",
            "german": "mit gelben Linsen, Paprika, Zwiebeln und Koriander in Currysauce"
          },
          "id": 29110,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Dal Tharka",
            "german": "Dal Tharka"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gemischte Linsen mit roten Bohnen, Butter, Tomaten und Zwiebeln",
            "german": "gemischte Linsen mit roten Bohnen, Butter, Tomaten und Zwiebeln"
          },
          "id": 29111,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Panjabi Dal Makhni",
            "german": "Panjabi Dal Makhni"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit roten indischen Bohnen in scharfer Currysauce",
            "german": "mit roten indischen Bohnen in scharfer Currysauce"
          },
          "id": 29112,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Rajmah Dal",
            "german": "Rajmah Dal"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "mit Gemüse, Mandeln, Ananas und Äpfeln in süßer Currysauce",
            "german": "mit Gemüse, Mandeln, Ananas und Äpfeln in süßer Currysauce"
          },
          "id": 29113,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Navrattan Korma",
            "german": "Navrattan Korma"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "gehacktes Soja mit Erbsen und Curryblättern in Tomatensauce",
            "german": "gehacktes Soja mit Erbsen und Curryblättern in Tomatensauce"
          },
          "id": 29114,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Soya Keema",
            "german": "Soya Keema"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Broccoli mit Kichererbsen, Karotten und Ingwer in Currysauce",
            "german": "Broccoli mit Kichererbsen, Karotten und Ingwer in Currysauce"
          },
          "id": 29115,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Broccoli Chana",
            "german": "Broccoli Chana"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indischer Weißkäse mit Kartoffeln und Erbsen in scharfer Sauce",
            "german": "indischer Weißkäse mit Kartoffeln und Erbsen in scharfer Sauce"
          },
          "id": 29116,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Paneer Vindaloo",
            "german": "Paneer Vindaloo"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "grüne Bohnen mit Zwiebeln und Paprika in Tomaten-Currysauce",
            "german": "grüne Bohnen mit Zwiebeln und Paprika in Tomaten-Currysauce"
          },
          "id": 29117,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Haree Sem Bhaji",
            "german": "Haree Sem Bhaji"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Kartoffeln mit Auberginen und Koriander in scharfer Kurkumasauce",
            "german": "Kartoffeln mit Auberginen und Koriander in scharfer Kurkumasauce"
          },
          "id": 29118,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Baingan Curry",
            "german": "Baingan Curry"
          },
          "old_price": 10.95,
          "price": 11.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "",
        "german": ""
      },
      "id": 1985,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Beilagen",
        "german": "Beilagen"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "knusprige Linsenwaffeln mit Kreuzkümmel",
            "german": "knusprige Linsenwaffeln mit Kreuzkümmel"
          },
          "id": 29119,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Papadam",
            "german": "Papadam"
          },
          "old_price": 0.83,
          "price": 0.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indisches Fladenbrot aus Vollkornweizenmehl",
            "german": "indisches Fladenbrot aus Vollkornweizenmehl"
          },
          "id": 29120,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Chapati",
            "german": "Chapati"
          },
          "old_price": 1.38,
          "price": 1.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indisches Fladenbrot aus Weizenmehl",
            "german": "indisches Fladenbrot aus Weizenmehl"
          },
          "id": 29121,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Nan Brot",
            "german": "Nan Brot"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "indisches Fladenbrot mit Butter und Schwarzkümmel",
            "german": "indisches Fladenbrot mit Butter und Schwarzkümmel"
          },
          "id": 29122,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Butter Nan",
            "german": "Butter Nan"
          },
          "old_price": 2.3,
          "price": 2.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Basmatireis",
            "german": "Basmatireis"
          },
          "id": 29123,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Reis",
            "german": "Reis"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Basmatireis mit Erbsen und Rosinen, verfeinert mit Butter",
            "german": "Basmatireis mit Erbsen und Rosinen, verfeinert mit Butter"
          },
          "id": 29124,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Pillau Reis",
            "german": "Pillau Reis"
          },
          "old_price": 2.67,
          "price": 2.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "kleiner Salat mit Gurken, Paprika, Tomaten und Zwiebeln",
            "german": "kleiner Salat mit Gurken, Paprika, Tomaten und Zwiebeln"
          },
          "id": 29125,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Beilagensalat",
            "german": "Beilagensalat"
          },
          "old_price": 3.22,
          "price": 3.5,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Joghurt mit Gurken, Kräutern und Kreuzkümmel",
            "german": "Joghurt mit Gurken, Kräutern und Kreuzkümmel"
          },
          "id": 29126,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Khera Raita",
            "german": "Khera Raita"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Joghurt mit Tomaten, Koriander und Kreuzkümmel",
            "german": "Joghurt mit Tomaten, Koriander und Kreuzkümmel"
          },
          "id": 29127,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Tomaten Raita",
            "german": "Tomaten Raita"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Joghurt mit Gewürzen und Kichererbsenmehlbällchen",
            "german": "Joghurt mit Gewürzen und Kichererbsenmehlbällchen"
          },
          "id": 29128,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Bundi Raita",
            "german": "Bundi Raita"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Joghurt mit pürierter Minze",
            "german": "Joghurt mit pürierter Minze"
          },
          "id": 29129,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Minzsauce",
            "german": "Minzsauce"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "eingelegte Mangostücke",
            "german": "eingelegte Mangostücke"
          },
          "id": 29130,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mango Chutney (süß-sauer)",
            "german": "Mango Chutney (süß-sauer)"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "eingelegte Gemüsestücke mit scharfen Gewürzen und Zitrone",
            "german": "eingelegte Gemüsestücke mit scharfen Gewürzen und Zitrone"
          },
          "id": 29131,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Mixed Pickles",
            "german": "Mixed Pickles"
          },
          "old_price": 1.84,
          "price": 2.0,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    },
    {
      "availability": {
        "always": true
      },
      "description_json": {
        "english": "",
        "german": ""
      },
      "id": 1986,
      "image": null,
      "in_stock": true,
      "name_json": {
        "english": "Nachspeisen",
        "german": "Nachspeisen"
      },
      "products": [
        {
          "choice": [],
          "description_json": {
            "english": "Kichererbsenmehlbällchen in Zuckersirup",
            "german": "Kichererbsenmehlbällchen in Zuckersirup"
          },
          "id": 29132,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Gulab Jamun",
            "german": "Gulab Jamun"
          },
          "old_price": 2.67,
          "price": 2.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Reispudding mit Rosenwasser, Mandeln und Rosinen",
            "german": "Reispudding mit Rosenwasser, Mandeln und Rosinen"
          },
          "id": 29133,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Firni Pudding",
            "german": "Firni Pudding"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        },
        {
          "choice": [],
          "description_json": {
            "english": "Fadennudel mit Zucker, Milch, Safran und Kardamom",
            "german": "Fadennudel mit Zucker, Milch, Safran und Kardamom"
          },
          "id": 29134,
          "image": null,
          "in_stock": true,
          "is_popular": false,
          "name_json": {
            "english": "Semya Payasam",
            "german": "Semya Payasam"
          },
          "old_price": 3.59,
          "price": 3.9,
          "side_products_json": [],
          "sku": null,
          "type_": "SINGLE"
        }
      ]
    }
  ])
  const [cartItems, setCartItems] = useState([])

  function addItemToCart(item) {
    if (cartItems.findIndex(cItem => cItem.id == item.id) == -1) {
      const cartItem = {}
      cartItem.id = item.id;
      cartItem.name = item.name_json.english;
      cartItem.quantity = 1;
      cartItem.price = item.price;
      let cItems = cartItems.map((c) => c);
      cItems.push(cartItem)
      setCartItems(cItems)
    }
    else {
      let cItems = cartItems.map((cItem) => {
        if (cItem.id == item.id)
          cItem.quantity += 1;
        return cItem;
      })
      setCartItems(cItems)
    }
  }

  function removeItemFromCart(item) {
    let itemIndex = cartItems.findIndex(cItem => cItem.id == item.id)
    if (cartItems[itemIndex]['quantity'] == 1) {
      let cItems = cartItems.map((c) => c);
      cItems.splice(itemIndex, 1);
      setCartItems(cItems);
    }
    else {
      let cItems = cartItems.map((cItem) => {
        if (cItem.id == item.id)
          cItem.quantity -= 1;
        return cItem;
      })
      setCartItems(cItems)
    }
  }
  // fetch(
  // "https://myqa.fleksa.com/pyapi/43/menu")
  // .then((res) => res.json())
  // .then((data) => {
  //   setItems(data.categories)
  // });
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-8'>
          {items.map((category, index) => {
            return (
              // <div key={index}>
              //   <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target={'#' + category.name_json.english.split(" ").join('')}>
              //     <p>{category.name_json.english}</p>
              //   </button>
              //   <div class="collapse" id={category.name_json.english.split(" ").join('')}>
              //     {category.products.map((item, i) => {
              //       return <Card item={item} add={addItemToCart} remove={removeItemFromCart} key={i} cartItems={cartItems} />
              //     })}
              //   </div>
              // </div>
              <div key={index}>
                <div className='sticky-top category-title'>
                  <p>{category.name_json.english} ( {category.products.length} items )</p>
                </div>
                <div className='container'>
                  {category.products.map((item, i) => {
                    return <Card item={item} add={addItemToCart} remove={removeItemFromCart} key={i} cartItems={cartItems} />
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="col-sm-12 col-md-4">
          <Cart items={cartItems} />
        </div>
      </div>
    </div>
  )
}
