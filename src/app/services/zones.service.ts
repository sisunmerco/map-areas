import { Injectable, OnInit } from '@angular/core';
import { Zone } from '../model/zone.interface';

@Injectable({
  providedIn: 'root',
})
export class ZonesService {
  zones: Zone[] = [];

  constructor() {
    this.zones = [
      {
        id: 'CO-ANT',
        title: 'Antioquia',
        areas: [
          {
            title: 'Apartado',
          },
          {
            title: 'Carepa',
          },
          {
            title: 'Chigorodó',
          },
          {
            title: 'El Reposo',
          },
          {
            title: 'Medellín',
          },
          {
            title: 'Barbosa',
          },
          {
            title: 'Copacabana',
          },
          {
            title: 'Itagüí',
          },
          {
            title: 'Caldas',
          },
          {
            title: 'La Estrella',
          },
          {
            title: 'Envigado',
          },
          {
            title: 'Sabaneta',
          },
          {
            title: 'Girardota',
          },
          {
            title: 'Rionegro',
          },
          {
            title: 'La Ceja',
          },{
            title: 'Guarne',
          },{
            title: 'Marinilla',
          },
        ],
      },
      {
        id: 'CO-SAN',
        title: 'Santander',
        areas: [
          {
            title: 'Barrancabermerja',
          },
          {
            title: 'Bucaramanga',
          },
          {
            title: 'Floridablanca',
          },
          {
            title: 'Piedecuesta',
          },
          {
            title: 'Girón',
          },
        ],
      },
      {
        id: 'CO-VAC',
        title: 'Valle del Cauca',
        areas: [
          {
            title: 'Buga',
          },
          {
            title: 'Guacari',
          },
          {
            title: 'Ginebra',
          },
          {
            title: 'El Cerrito',
          },
          {
            title: 'Restrepo',
          },
          {
            title: 'Darien',
          },
          {
            title: 'Yotoco',
          },
          {
            title: 'Cali',
          },
          {
            title: 'Jamundi',
          },
          {
            title: 'Palmira',
          },
          {
            title: 'Candelaria',
          },
          {
            title: 'Villa Gorgona',
          },
          {
            title: 'Yumbo',
          },
          {
            title: 'Montebello',
          },
          {
            title: 'Cartago',
          },
          {
            title: 'Anserma Nuevo',
          },
          {
            title: 'Obando',
          },
          {
            title: 'Alcala',
          },
        ],
      },
      {
        id: 'CO-ATL',
        title: 'Atlántico',
        areas: [
          {
            title: 'Barranquilla',
          },
          {
            title: 'Soledad',
          },
        ],
      },
      {
        id: 'CO-LAG',
        title: 'La Guajira',
        areas: [
          {
            title: 'Riohacha',
          }
        ],
      },
      {
        id: 'CO-NAR',
        title: 'Nariño',
        areas: [
          {
            title: 'Pasto',
          }
        ],
      },
      {
        id: 'CO-RIS',
        title: 'Risaralda',
        areas: [
          {
            title: 'Pereira',
          },
          {
            title: 'Dosquebradas',
          },{
            title: 'Santa Rosa De Cabal',
          }
        ]
      },
      {
        id: 'CO-CAU',
        title: 'Cauca',
        areas: [
          {
            title: 'Popayán',
          }
        ]
      },
      {
        id: 'CO-PUT',
        title: 'Putumayo',
        areas: [
          {
            title: 'Mocoa',
          },
          {
            title: 'Villagarzon',
          },
        ],
      },
      {
        id: 'CO-BOL',
        title: 'Bolívar',
        areas: [
          {
            title: 'Cartagena',
          },
          {
            title: 'Turbaco',
          },
          {
            title: 'Arjona',
          },
        ],
      },
      {
        id: 'CO-QUI',
        title: 'Quindío',
        areas: [
          {
            title: 'Armenia',
          },
          {
            title: 'Circasia',
          },
          {
            title: 'La Tebaida',
          },
          {
            title: 'Quimbaya',
          },
          {
            title: 'Montenegro',
          },
        ],
      },
      {
        id: 'CO-COR',
        title: 'Córdoba',
        areas: [
          {
            title: 'Montería',
          },
          {
            title: 'Cerete',
          },
          {
            title: 'San Bernardo Del Viento',
          },
        ],
      },
      {
        id: 'CO-CAQ',
        title: 'Caquetá',
        areas: [
          {
            title: 'area 1 ',
          },
          {
            title: 'area 2',
          },
        ],
      },
      {
        id: 'CO-CAS',
        title: 'Casanare',
        areas: [
          {
            title: 'area 1 ',
          },
          {
            title: 'area 2',
          },
        ],
      },
      {
        id: 'CO-CUN',
        title: 'Cundinamarca',
        areas: [
          {
            title: 'Chía',
          },
          {
            title: 'Cajicá',
          },
          {
            title: 'Cota',
          },
        ],
      },
      {
        id: 'CO-MET',
        title: 'Meta',
        areas: [
          {
            title: 'area 1 ',
          },
          {
            title: 'area 2',
          },
        ],
      },
      {
        id: 'CO-NSA',
        title: 'Norte de santander',
        areas: [
          {
            title: 'Ocaña',
          },
          {
            title: 'Abrego',
          },
          {
            title: 'Rio De Oro',
          },{
            title: 'Pueblo Nuevo',
          },{
            title: 'Buena Vista',
          },
        ],
      },
      {
        id: 'CO-HUI',
        title: 'Huila',
        areas: [
          {
            title: 'Neiva',
          },
          {
            title: 'Caguan',
          },
          {
            title: 'Rivera',
          },
          {
            title: 'Guacirco',
          },
          {
            title: 'Palermo',
          },
          {
            title: 'Riofrio',
          },
          {
            title: 'Fortalecillas',
          },
        ],
      },
    ];
  }

  getZones() {
    return this.zones;
  }
}
