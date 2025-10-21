import type { Locale } from '../i18n/config';
import type { LegalChangelogDictionary, LegalDocumentDictionary } from '../i18n/types';

type LegalDocumentKey = 'terms' | 'privacy' | 'copyright' | 'fanContent' | 'trademark';

const LEGAL_EMAIL = 'legal@resonance.aikahub.com';

const POSTAL_ADDRESS_EN = [
  'AIKA Resonance Studio',
  'Bajcsy-Zsilinszky út 12.',
  '1054 Budapest',
  'Hungary'
].join(', ');

const POSTAL_ADDRESS_HU = [
  'AIKA Resonance Studio',
  'Bajcsy-Zsilinszky út 12.',
  '1054 Budapest',
  'Magyarország'
].join(', ');

const legalDocuments: Record<LegalDocumentKey, Record<Locale, LegalDocumentDictionary>> = {
  terms: {
    en: {
      heading: 'Terms of Use',
      lastUpdated: 'Last updated: 2025-01-25',
      intro:
        'By accessing resonance.aikahub.com, our community spaces or any downloadable assets, you agree to follow these Terms of Use. They exist to protect the AIKA Resonance universe, its creators and our community.',
      sections: [
        {
          title: '1. Scope and Acceptance',
          paragraphs: [
            'These Terms cover the public website, newsletters, official social channels and any digital goods we provide. Using any of these services means you accept the Terms and our Privacy Policy.',
            'If you are under the age of majority in your jurisdiction, you need permission from a parent or legal guardian before engaging with AIKA Resonance content.'
          ]
        },
        {
          title: '2. Intellectual Property',
          paragraphs: [
            'All AIKA Resonance content is protected by copyright, trademark and other intellectual property laws. This includes but is not limited to:'
          ],
          lists: [
            {
              type: 'bullet',
              items: [
                'Character names, likenesses, story elements and gameplay terminology.',
                'Logotypes, icons, UI layouts and branded visual designs.',
                'Illustrations, key art, screenshots, renders and promotional videos.',
                'Lore entries, website copy, blog posts and any narrative scripts.',
                'Audio cues, musical themes and voice-over performances.'
              ]
            }
          ],
          afterParagraphs: [
            'You may not remove watermarks, copyright notices or metadata that identify AIKA Resonance as the owner of the materials.'
          ]
        },
        {
          title: '3. Community & Fan Contributions',
          paragraphs: [
            'We love seeing fan art, cosplay and other creative expressions. Section 4 below explains what is permitted for non-commercial usage. By submitting fan creations to our official channels, you grant us a non-exclusive, royalty-free right to feature, repost or adapt them for community highlights. You always retain ownership of your original work.'
          ]
        },
        {
          title: '4. Non-commercial Use and Licensing',
          paragraphs: [
            'You may share fan creations for personal enjoyment as long as they are clearly labeled as unofficial and comply with the Fan Content Policy. Commercial exploitation requires our written permission.',
            `For licensing requests please email ${LEGAL_EMAIL} with a detailed proposal. We aim to respond within 14 business days.`
          ]
        },
        {
          title: '5. Prohibited Conduct',
          lists: [
            {
              type: 'bullet',
              items: [
                'Selling or monetising AIKA Resonance assets, characters or lore without a signed agreement.',
                'Publishing unofficial games, merchandise or digital collections that could be mistaken for official releases.',
                'Impersonating AIKA Resonance staff or misrepresenting partnerships.',
                'Uploading malicious code, scraping large portions of the site or interfering with our services.',
                'Using our platforms to harass, discriminate or promote hate.'
              ]
            }
          ]
        },
        {
          title: '6. Disclaimers and Liability',
          paragraphs: [
            'AIKA Resonance is provided “as is.” We do not guarantee uninterrupted access, future feature releases or that content will remain available forever.',
            'To the maximum extent permitted by law, AIKA Resonance Studio is not liable for any indirect, incidental or consequential damages arising from your use of the site, downloadable assets or community features.'
          ]
        },
        {
          title: '7. Governing Law & Jurisdiction',
          paragraphs: [
            'These Terms are governed by the laws of Hungary. Any disputes shall be submitted to the exclusive jurisdiction of the competent courts in Budapest.',
            `If you have questions about these Terms, contact us at ${LEGAL_EMAIL} or by mail at ${POSTAL_ADDRESS_EN}.`
          ]
        }
      ]
    },
    hu: {
      heading: 'Felhasználási feltételek',
      lastUpdated: 'Utolsó frissítés: 2025-01-25',
      intro:
        'Az resonance.aikahub.com weboldal, a közösségi felületeink és a letölthető anyagok használatával elfogadod a jelen Felhasználási feltételeket. Céljuk, hogy megvédjék az AIKA Resonance világát, az alkotókat és a közösségünket.',
      sections: [
        {
          title: '1. Hatály és elfogadás',
          paragraphs: [
            'A feltételek vonatkoznak a nyilvános weboldalra, a hírlevelekre, a hivatalos közösségi csatornákra és minden digitális tartalomra, amit elérhetővé teszünk. Ezek bármelyikének használatával elfogadod a Feltételeket és az Adatkezelési tájékoztatót.',
            'Ha nem töltötted be a nagykorúságot a saját joghatóságodban, akkor az AIKA Resonance tartalmak használatához szülői vagy törvényes képviselői engedély szükséges.'
          ]
        },
        {
          title: '2. Szellemi tulajdon',
          paragraphs: [
            'Az AIKA Resonance minden tartalmát szerzői jog, védjegy és egyéb szellemi tulajdonjogi szabályok védik. Ide tartoznak többek között:'
          ],
          lists: [
            {
              type: 'bullet',
              items: [
                'A karakternevek, megjelenésük, történeti elemek és játékmenethez kapcsolódó kifejezések.',
                'Logók, ikonok, felhasználói felület elemek és márka arculati megoldások.',
                'Illusztrációk, key artok, screenshotok, renderelt képek és promóciós videók.',
                'Lore bejegyzések, weboldali szövegek, blogposztok és bármilyen narratív forgatókönyv.',
                'Hang effektek, zenei témák és szinkronfelvételek.'
              ]
            }
          ],
          afterParagraphs: [
            'Tilos eltávolítani a vízjeleket, szerzői jogi megjelöléseket vagy a metaadatokat, amelyek az AIKA Resonance tulajdonjogát jelzik.'
          ]
        },
        {
          title: '3. Közösségi és rajongói tartalmak',
          paragraphs: [
            'Örömmel látjuk a rajongói alkotásokat, cosplayt és minden kreatív kifejezést. A 4. pont részletezi a nem kereskedelmi felhasználás feltételeit. Ha hivatalos csatornáinkon osztod meg az alkotásodat, nem kizárólagos, jogdíjmentes jogot biztosítasz számunkra, hogy azt megjelentessük vagy adaptáljuk közösségi kiemelésekben. Az eredeti mű feletti tulajdonjogod megmarad.'
          ]
        },
        {
          title: '4. Nem kereskedelmi felhasználás és engedélyezés',
          paragraphs: [
            'Személyes örömre megoszthatod a rajongói alkotásaidat, amennyiben egyértelműen feltünteted, hogy nem hivatalos, és megfelel a Fan Content Policy előírásainak. Kereskedelmi hasznosítás csak írásbeli engedélyünkkel lehetséges.',
            `Engedélykéréshez írj a ${LEGAL_EMAIL} címre egy részletes javaslattal. 14 munkanapon belül válaszolunk.`
          ]
        },
        {
          title: '5. Tiltott magatartás',
          lists: [
            {
              type: 'bullet',
              items: [
                'AIKA Resonance eszközök, karakterek vagy lore értékesítése, monetizálása aláírt megállapodás nélkül.',
                'Nem hivatalos játékok, merchandise vagy digitális gyűjtemények kiadása, amelyek hivatalos megjelenésnek tűnhetnek.',
                'AIKA Resonance munkatársak megszemélyesítése vagy partnerkapcsolat hamis bemutatása.',
                'Kártékony kód feltöltése, a webhely tömeges lekaparása vagy a szolgáltatásaink megzavarása.',
                'Közösségi felületeink használata zaklatásra, diszkriminációra vagy gyűlöletkeltésre.'
              ]
            }
          ]
        },
        {
          title: '6. Felelősségkorlátozás',
          paragraphs: [
            'Az AIKA Resonance szolgáltatások „ahogy van” állapotban érhetők el. Nem vállalunk garanciát a folyamatos elérhetőségre, jövőbeli funkciókra vagy arra, hogy a tartalom örökre hozzáférhető marad.',
            'A jogszabályok által megengedett legnagyobb mértékben az AIKA Resonance Studio nem vállal felelősséget a weboldal, a letölthető anyagok vagy a közösségi funkciók használatából eredő közvetett, járulékos vagy következményes károkért.'
          ]
        },
        {
          title: '7. Irányadó jog és joghatóság',
          paragraphs: [
            'A feltételekre a magyar jog az irányadó. A vitás ügyeket a budapesti illetékes bíróságok kizárólagos joghatósága alá tartozónak tekintjük.',
            `Kérdés esetén írj a ${LEGAL_EMAIL} címre, vagy küldj levelet a következő címre: ${POSTAL_ADDRESS_HU}.`
          ]
        }
      ]
    }
  },
  privacy: {
    en: {
      heading: 'Privacy Policy',
      lastUpdated: 'Last updated: 2025-01-25',
      intro:
        'This Privacy Policy describes how we collect, use and safeguard personal data when you interact with resonance.aikahub.com, our newsletters and contact forms.',
      sections: [
        {
          title: '1. Data Controller',
          paragraphs: ['AIKA Resonance Studio, based in Budapest, Hungary, is responsible for processing your personal data. You can reach us at the contact details provided at the end of this policy.']
        },
        {
          title: '2. Data We Collect',
          subsections: [
            {
              title: 'Website analytics',
              paragraphs: [
                'We use Cloudflare Web Analytics to understand aggregated traffic trends. The service does not use cookies and collects anonymised metrics such as page views, device type and approximate region. No personally identifiable information is stored.'
              ]
            },
            {
              title: 'Cookies and local storage',
              paragraphs: [
                'Essential cookies remember your language preference and keep security features active. These cookies are required for the site to function.',
                'We do not use advertising cookies. You can clear or block cookies in your browser settings, but some features may no longer work correctly.'
              ]
            },
            {
              title: 'Contact forms and newsletter',
              paragraphs: [
                'When you subscribe to our newsletter or submit a request via forms, we collect the information you provide (for example your email address, display name and message). We process this data solely to respond to your request or deliver updates.'
              ]
            }
          ]
        },
        {
          title: '3. Legal Bases for Processing',
          paragraphs: [
            'We process personal data based on your consent (newsletter subscription), to fulfil our legitimate interest in maintaining secure services, or to comply with legal obligations.'
          ]
        },
        {
          title: '4. Storage and Retention',
          paragraphs: [
            'Personal data is stored on secure servers located in the European Union. Access is limited to authorised AIKA Resonance team members.',
            'Newsletter subscription data is retained until you unsubscribe. Contact form submissions are kept for up to 24 months for reference and compliance. Aggregated analytics data may be stored indefinitely in anonymised form.'
          ]
        },
        {
          title: '5. Sharing of Data',
          paragraphs: [
            'We do not sell personal information. We only share data with trusted service providers (such as newsletter delivery platforms or infrastructure partners) under contractual obligations that mirror this policy.'
          ]
        },
        {
          title: '6. Your Rights',
          lists: [
            {
              type: 'bullet',
              items: [
                'Request access to the personal data we hold about you.',
                'Ask for correction or deletion of your data.',
                'Withdraw consent at any time (for example unsubscribe from emails).',
                'Object to processing based on legitimate interest.',
                'Lodge a complaint with your local data protection authority.'
              ]
            }
          ]
        },
        {
          title: '7. Contact',
          paragraphs: [
            `For privacy-related enquiries email ${LEGAL_EMAIL} or send a letter to ${POSTAL_ADDRESS_EN}.`
          ]
        }
      ]
    },
    hu: {
      heading: 'Adatkezelési tájékoztató',
      lastUpdated: 'Utolsó frissítés: 2025-01-25',
      intro:
        'Az Adatkezelési tájékoztató ismerteti, hogyan gyűjtjük, használjuk és védjük a személyes adatokat, amikor az resonance.aikahub.com weboldalon, a hírlevelünkön vagy a kapcsolatfelvételi űrlapokon keresztül interakcióba lépsz velünk.',
      sections: [
        {
          title: '1. Adatkezelő',
          paragraphs: ['Az adatkezelő az AIKA Resonance Studio, székhelye Budapest, Magyarország. Az adatkezeléssel kapcsolatos kérdéseiddel a dokumentum végén feltüntetett elérhetőségeinken kereshetsz minket.']
        },
        {
          title: '2. Gyűjtött adatok',
          subsections: [
            {
              title: 'Webanalitika',
              paragraphs: [
                'A Cloudflare Web Analytics szolgáltatást használjuk az összesített forgalmi trendek megértéséhez. A szolgáltatás nem használ sütiket, és anonim módon gyűjt adatokat, például oldalmegtekintéseket, eszköztípust és hozzávetőleges régiót. Személyazonosításra alkalmas információt nem tárolunk.'
              ]
            },
            {
              title: 'Sütik és helyi tároló',
              paragraphs: [
                'Az elengedhetetlen sütik a nyelvi beállítást jegyzik meg, és biztosítják a biztonsági funkciók működését. Ezek nélkül az oldal nem működne megfelelően.',
                'Reklám célú sütiket nem alkalmazunk. A böngésződ beállításaiban letilthatod vagy törölheted a sütiket, de egyes funkciók ezután nem lesznek elérhetőek.'
              ]
            },
            {
              title: 'Kapcsolati űrlapok és hírlevél',
              paragraphs: [
                'Amikor feliratkozol a hírlevelünkre vagy űrlapon keresztül keresel meg minket, az általad megadott adatokat (például e-mail cím, becenév, üzenet) gyűjtjük. Ezeket kizárólag a válaszadásra vagy a hírlevelek kézbesítésére használjuk.'
              ]
            }
          ]
        },
        {
          title: '3. Adatkezelés jogalapja',
          paragraphs: [
            'Személyes adatokat az általad adott hozzájárulás alapján (például hírlevél feliratkozás), jogos érdekünk érvényesítésére (a szolgáltatás biztonságos működtetése) vagy jogi kötelezettségeink teljesítésére kezelünk.'
          ]
        },
        {
          title: '4. Tárolás és megőrzés',
          paragraphs: [
            'Az adatokat az Európai Unió területén található biztonságos szervereken tároljuk. A hozzáférés kizárólag az arra jogosult AIKA Resonance munkatársak számára engedélyezett.',
            'A hírlevél-feliratkozási adatokat mindaddig megőrizzük, amíg le nem iratkozol. A kapcsolatfelvételi űrlapok beérkezett üzeneteit legfeljebb 24 hónapig tároljuk referenciaként és jogi megfelelés céljából. Az összesített, anonimizált analitikai adatokat korlátlan ideig megőrizhetjük.'
          ]
        },
        {
          title: '5. Adatok megosztása',
          paragraphs: [
            'Személyes adatokat nem értékesítünk. Az adatokat kizárólag megbízható szolgáltató partnerekkel osztjuk meg (például hírlevélküldő rendszerekkel vagy infrastruktúra-szolgáltatókkal), szerződéses kötelezettségek mellett, amelyek tükrözik a jelen tájékoztató előírásait.'
          ]
        },
        {
          title: '6. Jogok gyakorlása',
          lists: [
            {
              type: 'bullet',
              items: [
                'Hozzáférést kérhetsz a rólad tárolt személyes adatokhoz.',
                'Kérheted az adataid helyesbítését vagy törlését.',
                'Bármikor visszavonhatod a hozzájárulásodat (például leiratkozhatsz a hírlevélről).',
                'Tiltakozhatsz a jogos érdek alapján végzett adatkezeléssel szemben.',
                'Panaszt tehetsz az illetékes adatvédelmi hatóságnál.'
              ]
            }
          ]
        },
        {
          title: '7. Kapcsolat',
          paragraphs: [
            `Adatkezeléssel kapcsolatos kérdésekben a ${LEGAL_EMAIL} címen vagy postán, a következő címen érhetsz el: ${POSTAL_ADDRESS_HU}.`
          ]
        }
      ]
    }
  },
  copyright: {
    en: {
      heading: 'Copyright Policy / DMCA',
      lastUpdated: 'Last updated: 2025-01-25',
      intro:
        'We respect the intellectual property rights of others and expect the same from our community. This policy explains how to notify us about alleged infringement and how we handle removal and counter-notice requests.',
      sections: [
        {
          title: '1. Submitting a Copyright Notice',
          paragraphs: [
            'If you believe your work has been used on AIKA Resonance platforms without authorisation, send a written notice that includes the following:'
          ],
          lists: [
            {
              type: 'numbered',
              items: [
                'Your full legal name and contact details.',
                'Identification of the copyrighted work you claim has been infringed.',
                'A description of where the material is located (URLs or direct links).',
                'A statement that you have a good-faith belief the use is not authorised by the rights holder, its agent or the law.',
                'A statement, under penalty of perjury, that the information in the notice is accurate and that you are the rights holder or authorised to act on the holder’s behalf.',
                'An electronic or physical signature.'
              ]
            }
          ],
          afterParagraphs: [`Send your notice to ${LEGAL_EMAIL} or mail it to: ${POSTAL_ADDRESS_EN}.`]
        },
        {
          title: '2. Review and Removal Process',
          paragraphs: [
            'Upon receiving a complete notice we will review the claim, remove or disable access to the disputed material when appropriate, and notify the user who posted it.',
            'We may request additional information to verify ownership. Records of notices are stored for compliance purposes.'
          ]
        },
        {
          title: '3. Counter-Notice',
          paragraphs: [
            'If your content was removed in error, you may submit a counter-notice including the following:'
          ],
          lists: [
            {
              type: 'numbered',
              items: [
                'Your name, address, phone number and email.',
                'Identification of the content removed and the location where it previously appeared.',
                'A statement under penalty of perjury that you have a good-faith belief the material was removed or disabled as a result of mistake or misidentification.',
                'Your consent to the jurisdiction of the courts in Budapest, Hungary, and agreement to accept service of process from the original complainant.',
                'Your signature.'
              ]
            }
          ],
          afterParagraphs: [`Send counter-notices to ${LEGAL_EMAIL}. We will forward your statement to the original complainant and restore the material within 10–14 business days unless they initiate legal action.`]
        }
      ]
    },
    hu: {
      heading: 'Szerzői jogi / DMCA tájékoztató',
      lastUpdated: 'Utolsó frissítés: 2025-01-25',
      intro:
        'Tiszteletben tartjuk mások szellemi tulajdonát, és ugyanezt várjuk a közösségtől is. Ez a tájékoztató ismerteti, hogyan jelezheted a vélt jogsértést, és miként kezeljük az eltávolítási és ellenkérelmi folyamatokat.',
      sections: [
        {
          title: '1. Jogbirtokosi értesítés benyújtása',
          paragraphs: [
            'Ha úgy gondolod, hogy a műved engedély nélkül került fel az AIKA Resonance felületeire, írásos értesítést kell küldened az alábbi adatokkal:'
          ],
          lists: [
            {
              type: 'numbered',
              items: [
                'Teljes neved és elérhetőségeid.',
                'A jogsértett mű pontos azonosítása.',
                'A jogsértő tartalom helye (URL vagy közvetlen link).',
                'Nyilatkozat jóhiszeműen arról, hogy a vitatott felhasználást a jogtulajdonos, annak megbízottja vagy a jogszabály nem engedélyezte.',
                'Nyilatkozat büntetőjogi felelősséged tudatában arról, hogy a bejelentésben szereplő információk pontosak, és hogy jogosult vagy a tulajdonos nevében eljárni.',
                'Elektronikus vagy fizikai aláírás.'
              ]
            }
          ],
          afterParagraphs: [`Az értesítést a ${LEGAL_EMAIL} címre küldd, vagy postán ide: ${POSTAL_ADDRESS_HU}.`]
        },
        {
          title: '2. Vizsgálat és eltávolítás',
          paragraphs: [
            'A hiánytalan értesítés kézhezvételét követően megvizsgáljuk a bejelentést, szükség esetén eltávolítjuk vagy hozzáférhetetlenné tesszük a vitatott tartalmat, és értesítjük az eredeti feltöltőt.',
            'Szükség esetén további információt kérhetünk a jogosultság igazolására. Az értesítéseket megfelelőségi célból archiváljuk.'
          ]
        },
        {
          title: '3. Ellenértesítés',
          paragraphs: [
            'Ha a tartalmad tévedésből került eltávolításra, ellenértesítést nyújthatsz be az alábbi tartalommal:'
          ],
          lists: [
            {
              type: 'numbered',
              items: [
                'Neved, címed, telefonszámod és e-mail címed.',
                'Az eltávolított tartalom azonosítása és a korábbi elérési helye.',
                'Nyilatkozat büntetőjogi felelősséged tudatában arról, hogy jóhiszeműen úgy véled, a tartalmat tévedésből vagy azonosítási hiba miatt távolították el.',
                'Nyilatkozat arról, hogy aláveted magad a magyar bíróságok joghatóságának, és elfogadod a bejelentőtől érkező kézbesítést.',
                'Aláírásod.'
              ]
            }
          ],
          afterParagraphs: [`Az ellenértesítést a ${LEGAL_EMAIL} címre küldd el. A nyilatkozatot továbbítjuk az eredeti bejelentőnek, és 10–14 munkanapon belül visszaállítjuk a tartalmat, amennyiben nem indítanak jogi eljárást.`]
        }
      ]
    }
  },
  fanContent: {
    en: {
      heading: 'Fan Content Policy',
      lastUpdated: 'Last updated: 2025-01-25',
      intro:
        'AIKA Resonance thrives on community creativity. This policy clarifies how you may create and share fan-made works while keeping our IP safe.',
      sections: [
        {
          title: '1. Permitted Fan Creations',
          paragraphs: ['You may create and share the following as long as they remain non-commercial:'],
          lists: [
            {
              type: 'bullet',
              items: [
                'Illustrations, comics, cosplay and written stories based on AIKA Resonance.',
                'AI-generated images, models or LoRA training sets, provided they follow the attribution rules.',
                'Videos, streams and remixes that do not monetise AIKA Resonance assets directly (ad revenue on commentary videos is acceptable).'
              ]
            }
          ],
          afterParagraphs: ['Always credit using the format “AIKA Resonance by [Your Name/Entity]”.']
        },
        {
          title: '2. Attribution Requirements',
          paragraphs: [
            'Place the credit line clearly on the artwork, description or accompanying documentation. Online posts should include the attribution in the caption or metadata. For physical displays use a printed label.'
          ]
        },
        {
          title: '3. Prohibited Uses',
          lists: [
            {
              type: 'bullet',
              items: [
                'Using AIKA Resonance logos or branding in a way that implies official endorsement.',
                'Publishing fan projects as if they were official releases or merchandise.',
                'Creating NSFW content featuring minors or characters depicted as minors.',
                'Producing hateful, harassing or extremist material.'
              ]
            }
          ]
        },
        {
          title: '4. Commercial Licensing Requests',
          paragraphs: [
            'If you would like to sell or otherwise monetise your fan creation, request a commercial licence first.'
          ],
          lists: [
            {
              type: 'numbered',
              items: [
                'Prepare a summary of your project, distribution plans and timelines.',
                `Submit the request via our contact form or email ${LEGAL_EMAIL}.`,
                'Allow at least 14 business days for review. We may request prototypes or additional materials.'
              ]
            }
          ]
        }
      ]
    },
    hu: {
      heading: 'Fan Content Policy',
      lastUpdated: 'Utolsó frissítés: 2025-01-25',
      intro:
        'Az AIKA Resonance közössége a kreativitásból építkezik. Ez a szabályzat tisztázza, hogyan készíthetsz és oszthatsz meg rajongói tartalmakat úgy, hogy közben megóvjuk a szellemi tulajdont.',
      sections: [
        {
          title: '1. Engedélyezett rajongói alkotások',
          paragraphs: ['A következő típusú tartalmak nem kereskedelmi céllal megoszthatók:'],
          lists: [
            {
              type: 'bullet',
              items: [
                'Illusztrációk, képregények, cosplay és AIKA Resonance ihlette történetek.',
                'AI által generált képek, modellek vagy LoRA tréningkészletek, ha betartod a forrásmegjelölési szabályokat.',
                'Videók, streamek és remixek, amennyiben nem közvetlenül monetizálják az AIKA Resonance eszközöket (kommentár videókon megjelenő hirdetés elfogadható).'
              ]
            }
          ],
          afterParagraphs: ['Mindig használd a „AIKA Resonance by [Your Name/Entity]” megjelölést.']
        },
        {
          title: '2. Forrásmegjelölés',
          paragraphs: [
            'A kredit sort egyértelműen tüntesd fel a művön, a leírásban vagy a kísérő dokumentációban. Online megosztásnál a feliratban vagy a metaadatokban szerepeljen, fizikai megjelenítésnél nyomtatott formában.'
          ]
        },
        {
          title: '3. Tiltott felhasználások',
          lists: [
            {
              type: 'bullet',
              items: [
                'Az AIKA Resonance logók vagy arculati elemek olyan módon történő használata, ami hivatalos jóváhagyást sugall.',
                'Rajongói projektek hivatalos megjelenésként vagy merchandise-ként történő publikálása.',
                'Kiskorúakat vagy kiskorúként ábrázolt szereplőket tartalmazó NSFW tartalom.',
                'Gyűlöletkeltő, zaklató vagy szélsőséges anyagok készítése.'
              ]
            }
          ]
        },
        {
          title: '4. Kereskedelmi engedélykérés',
          paragraphs: ['Ha értékesíteni szeretnéd az alkotásod, előbb kereskedelmi engedélyt kell kérned tőlünk.'],
          lists: [
            {
              type: 'numbered',
              items: [
                'Készíts részletes összefoglalót a projektről, tervezett terjesztésről és ütemezésről.',
                `Küldd el a kérelmet a kapcsolatfelvételi űrlapunkon vagy a ${LEGAL_EMAIL} e-mail címen.`,
                'Számolj legalább 14 munkanap átfutási idővel. Elkérhetjük a prototípusokat vagy további anyagokat.'
              ]
            }
          ]
        }
      ]
    }
  },
  trademark: {
    en: {
      heading: 'Trademark Guidelines',
      lastUpdated: 'Last updated: 2025-01-25',
      intro:
        'These guidelines explain how to reference AIKA Resonance trademarks without causing confusion about official affiliation.',
      sections: [
        {
          title: '1. Protected Marks',
          paragraphs: [
            'The names “AIKA Resonance”, “Resonator”, character names, logos and any related insignia are protected trademarks of AIKA Resonance Studio.'
          ]
        },
        {
          title: '2. Permitted Uses',
          lists: [
            {
              type: 'bullet',
              items: [
                'Referencing AIKA Resonance in news, reviews or commentary that is clearly descriptive.',
                'Using the name in fan content titles when paired with descriptors like “fan-made” or “unofficial”.',
                'Linking to our official website or social channels when discussing AIKA Resonance.'
              ]
            }
          ],
          paragraphs: ['Do not modify, distort or combine our marks with other logos.']
        },
        {
          title: '3. Restricted Names and Domains',
          paragraphs: ['To avoid confusion, the following are not permitted without written approval:'],
          lists: [
            {
              type: 'bullet',
              items: [
                'Domain names such as aika-world-official.com or resonatorgame.net.',
                'App titles like “AIKA Resonance Companion” or “AIKA Resonance Loot Tracker”.',
                'Business names that start with “AIKA Resonance” or imply partnership.'
              ]
            }
          ],
          afterParagraphs: [
            'Acceptable alternatives include descriptive titles like “Unofficial AIKA Resonance Fan Wiki” or “Resonator Build Planner (Fan-Made)”. When in doubt, contact us.'
          ]
        },
        {
          title: '4. Reporting Misuse',
          paragraphs: [`Report suspected trademark misuse to ${LEGAL_EMAIL}. Provide screenshots, URLs and context so we can investigate quickly.`]
        }
      ]
    },
    hu: {
      heading: 'Védjegyhasználati irányelvek',
      lastUpdated: 'Utolsó frissítés: 2025-01-25',
      intro:
        'Az irányelvek segítenek abban, hogyan hivatkozhatsz az AIKA Resonance védjegyeire anélkül, hogy hivatalos kapcsolatot sugallnál.',
      sections: [
        {
          title: '1. Védett megjelölések',
          paragraphs: ['Az „AIKA Resonance”, a „Resonator”, a karakternevek, a logók és minden kapcsolódó embléma az AIKA Resonance Studio védjegye.']
        },
        {
          title: '2. Engedélyezett felhasználások',
          lists: [
            {
              type: 'bullet',
              items: [
                'Az AIKA Resonance említése hírekben, ismertetőkben vagy kommentárokban, ahol egyértelmű a leíró jelleg.',
                'A név használata rajongói tartalmak címében, ha mellé teszed a „fan-made” vagy „nem hivatalos” jelölést.',
                'Hivatalos weboldalunkra vagy közösségi csatornáinkra mutató linkek elhelyezése, amikor AIKA Resonance témáról írsz.'
              ]
            }
          ],
          paragraphs: ['Ne módosítsd, torzítsd vagy kombináld más logókkal a védjegyeinket.']
        },
        {
          title: '3. Tiltott nevek és domainek',
          paragraphs: ['A félreértések elkerülése érdekében az alábbiak nem engedélyezettek írásbeli jóváhagyásunk nélkül:'],
          lists: [
            {
              type: 'bullet',
              items: [
                'Olyan domainek, mint az aika-world-official.com vagy a resonatorgame.net.',
                'Olyan alkalmazásnevek, mint az „AIKA Resonance Companion” vagy az „AIKA Resonance Loot Tracker”.',
                'Olyan cégnév, amely az „AIKA Resonance” kifejezéssel kezdődik vagy partnerséget sugall.'
              ]
            }
          ],
          afterParagraphs: [
            'Elfogadható alternatíva például a „Nem hivatalos AIKA Resonance rajongói wiki” vagy a „Resonator Build Planner (rajongói projekt)”. Kétség esetén vedd fel velünk a kapcsolatot.'
          ]
        },
        {
          title: '4. Visszaélés jelentése',
          paragraphs: [`Ha védjeggyel való visszaélést észlelsz, írd meg a ${LEGAL_EMAIL} címre. Mellékelj képernyőképet, linket és leírást a gyors vizsgálathoz.`]
        }
      ]
    }
  }
};

const legalChangelog: Record<Locale, LegalChangelogDictionary> = {
  en: {
    heading: 'Changelog',
    intro: 'Key updates to AIKA Resonance legal policies and protective measures.',
    entries: [
      {
        version: '2025.01 – Legal Protection Suite',
        date: '2025-01-25',
        summary: 'Launched comprehensive legal documentation, IP safeguards and archival automation.',
        details: [
          'Published Terms of Use, Privacy Policy, DMCA, Fan Content Policy and Trademark Guidelines in EN/HU.',
          'Added watermark-protected Open Graph assets and embedded rights metadata.',
          'Introduced automated Wayback Machine archival trigger after deployments.'
        ]
      },
      {
        version: '2024.12 – Pre-release groundwork',
        date: '2024-12-12',
        summary: 'Prepared infrastructure for localisation, analytics and newsletter consent tracking.',
        details: [
          'Localisation system refactored for dual language legal content.',
          'Documented consent requirements for email marketing in anticipation of launch.'
        ]
      }
    ]
  },
  hu: {
    heading: 'Változásnapló',
    intro: 'Az AIKA Resonance jogi dokumentációjának és védelmi intézkedéseinek fontosabb frissítései.',
    entries: [
      {
        version: '2025.01 – Jogi védelmi csomag',
        date: '2025-01-25',
        summary: 'Elindult a teljes körű jogi dokumentáció, az IP-védelmi megoldások és az archiválási automatizmus.',
        details: [
          'Közzétettük az Angol/Magyar Felhasználási feltételeket, Adatkezelést, DMCA, Fan Content Policy-t és Védjegy irányelveket.',
          'Vízjellel védett Open Graph képeket és beágyazott szerzői jogi metaadatokat vezettünk be.',
          'Beállítottuk a Wayback Machine automatikus mentését minden éles telepítés után.'
        ]
      },
      {
        version: '2024.12 – Előkészítő lépések',
        date: '2024-12-12',
        summary: 'Felkészítettük az infrastruktúrát a lokalizációra, analitikára és a hírlevél-hozzájárulások követésére.',
        details: [
          'A lokalizációs rendszert kiterjesztettük a két nyelvű jogi tartalmakra.',
          'Dokumentáltuk a hírlevélhez szükséges hozzájárulás-kezelési folyamatot.'
        ]
      }
    ]
  }
};

export function getLegalDocument(locale: Locale, key: LegalDocumentKey): LegalDocumentDictionary {
  return legalDocuments[key][locale];
}

export function getLegalChangelog(locale: Locale): LegalChangelogDictionary {
  return legalChangelog[locale];
}
