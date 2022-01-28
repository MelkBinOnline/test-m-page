TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "vfov": 180,
  "id": "panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007",
  "pitch": 0,
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "partial": false,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "vfov": 180,
     "id": "panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF",
     "pitch": 0,
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "vfov": 180,
        "id": "panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04",
        "pitch": 0,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF",
          "yaw": 109.86,
          "backwardYaw": -60.47,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF, this.camera_7361A7D4_631F_0B6A_41D0_08B9E1F4D029); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_72699DBB_6311_FF1E_41B4_ABF624863394",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.93,
              "yaw": 109.86,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 70,
                 "class": "ImageResourceLevel",
                 "width": 70,
                 "url": "media/panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -2.65
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 109.86,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.93,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 141,
                 "class": "ImageResourceLevel",
                 "width": 141,
                 "url": "media/panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -2.65
             }
            ]
           }
          ]
         }
        ],
        "label": "PXL_20211229_185845821.PHOTOSPHERE",
        "thumbnailUrl": "media/panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_t.jpg"
       },
       "yaw": -60.47,
       "backwardYaw": 109.86,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 120,
        "vfov": 156.91,
        "id": "panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8",
        "pitch": 0,
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF",
          "yaw": 110.47,
          "backwardYaw": -30.27,
          "distance": 1
         }
        ],
        "frames": [
         {
          "thumbnailUrl": "media/panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2805,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_hq.jpeg"
            },
            {
             "height": 1744,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF, this.camera_733C8832_631F_052E_41CA_180DE8F63316); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_7268D7AD_6311_0B35_41BC_FF20A63DD467",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.63,
              "yaw": 110.47,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 67,
                 "class": "ImageResourceLevel",
                 "width": 77,
                 "url": "media/panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -4.46
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 110.47,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.63,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 134,
                 "class": "ImageResourceLevel",
                 "width": 154,
                 "url": "media/panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -4.46
             }
            ]
           }
          ]
         }
        ],
        "label": "PXL_20211229_185048024.PHOTOSPHERE",
        "thumbnailUrl": "media/panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_t.jpg"
       },
       "yaw": -30.27,
       "backwardYaw": 110.47,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007",
       "yaw": 123.22,
       "backwardYaw": -73.73,
       "distance": 1
      }
     ],
     "frames": [
      {
       "thumbnailUrl": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04, this.camera_731B27F3_631F_0B2E_4190_3D57939B256B); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_6D9C2609_6313_0CFA_41B8_0355467DEDAD",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.94,
           "yaw": -60.47,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 70,
              "class": "ImageResourceLevel",
              "width": 70,
              "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -0.39
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -60.47,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.94,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 141,
              "class": "ImageResourceLevel",
              "width": 141,
              "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -0.39
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007, this.camera_73003822_631F_052E_41D4_9ACC42456E0A); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_7218EBD5_6313_1B6A_41B5_B9EE5C889576",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.54,
           "yaw": 123.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 67,
              "class": "ImageResourceLevel",
              "width": 67,
              "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -1.19
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 123.22,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 134,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -1.19
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8, this.camera_7313C803_631F_04EE_41A4_27C154817F2D); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "id": "overlay_6C8B0904_6311_04EA_41D0_084E836CF349",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.08,
           "yaw": -30.27,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 81,
              "class": "ImageResourceLevel",
              "width": 67,
              "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.08
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -30.27,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 7.08,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 163,
              "class": "ImageResourceLevel",
              "width": 134,
              "url": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -20.08
          }
         ]
        }
       ]
      }
     ],
     "label": "PXL_20211229_185636223.PHOTOSPHERE",
     "thumbnailUrl": "media/panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_t.jpg"
    },
    "yaw": -73.73,
    "backwardYaw": 123.22,
    "distance": 1
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF, this.camera_732B7841_631F_056A_41C9_2F395E82C6FD); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_73B29D66_6311_3F36_41D2_79F1D3C5BDBC",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.03,
        "yaw": -73.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 62,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.06
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -73.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 116,
           "class": "ImageResourceLevel",
           "width": 125,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 0.06
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_6CDA9AC6_6311_0576_4188_F6C81C39F084, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_73E683CC_6317_0B7A_41D0_DDFEFB60D4C7",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.82,
        "yaw": -95.13,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 80,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 10.11
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -95.13,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 160,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 10.11
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_73B5A4C1_6371_0D6A_41C5_CD6CFFE54C73, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_6D9CFC10_6317_3CEA_41D6_3555F34E7E33",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.53,
        "yaw": -95.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 67,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 1.32
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -95.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.53,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 1.32
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_6DEE8943_6313_076E_418D_7FF7A8616FE0, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, null, null, null, null, null, false)"
       }
      ],
      "id": "overlay_6C9288CD_6313_057A_41D6_0D4DAE27CB41",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.46,
        "yaw": -95.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 67,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.23
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -95.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "class": "ImageResourceLevel",
           "width": 134,
           "url": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -8.23
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 7.46,
      "yaw": -95.34,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "id": "popup_6DEE8943_6313_076E_418D_7FF7A8616FE0",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 150,
         "class": "ImageResourceLevel",
         "width": 336,
         "url": "media/popup_6DEE8943_6313_076E_418D_7FF7A8616FE0_0_0.png"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": -8.23
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 8.82,
      "yaw": -95.13,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "id": "popup_6CDA9AC6_6311_0576_4188_F6C81C39F084",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 426,
         "class": "ImageResourceLevel",
         "width": 596,
         "url": "media/popup_6CDA9AC6_6311_0576_4188_F6C81C39F084_0_0.png"
        },
        {
         "height": 365,
         "class": "ImageResourceLevel",
         "width": 512,
         "url": "media/popup_6CDA9AC6_6311_0576_4188_F6C81C39F084_0_1.png"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 10.11
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 7.53,
      "yaw": -95.34,
      "hideEasing": "cubic_out",
      "class": "PopupPanoramaOverlay",
      "id": "popup_73B5A4C1_6371_0D6A_41C5_CD6CFFE54C73",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 660,
         "class": "ImageResourceLevel",
         "width": 900,
         "url": "media/popup_73B5A4C1_6371_0D6A_41C5_CD6CFFE54C73_0_0.jpg"
        },
        {
         "height": 375,
         "class": "ImageResourceLevel",
         "width": 512,
         "url": "media/popup_73B5A4C1_6371_0D6A_41C5_CD6CFFE54C73_0_1.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 1.32
     }
    ]
   }
  ],
  "label": "PXL_20211229_190059983.PHOTOSPHERE",
  "thumbnailUrl": "media/panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF",
 {
  "id": "panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04",
 {
  "id": "panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8",
 {
  "id": "panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_6F9ACA6B_6331_053E_41CD_9C3F95DF1007_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_6EDEB002_6331_04EF_41CE_2BE32843ADBF_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_6EE3ED34_6331_1F2A_41D1_AB75554D9B04_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
    "camera": "this.panorama_6DB77CCD_6333_3D7A_41C9_EBCAF83559F8_camera",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 "this.popup_6CDA9AC6_6311_0576_4188_F6C81C39F084",
 "this.popup_73B5A4C1_6371_0D6A_41C5_CD6CFFE54C73",
 "this.popup_6DEE8943_6313_076E_418D_7FF7A8616FE0",
 {
  "id": "camera_7361A7D4_631F_0B6A_41D0_08B9E1F4D029",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 119.53,
   "pitch": 0
  }
 },
 {
  "id": "camera_731B27F3_631F_0B2E_4190_3D57939B256B",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -70.14,
   "pitch": 0
  }
 },
 {
  "id": "camera_7313C803_631F_04EE_41A4_27C154817F2D",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -69.53,
   "pitch": 0
  }
 },
 {
  "id": "camera_73003822_631F_052E_41D4_9ACC42456E0A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 106.27,
   "pitch": 0
  }
 },
 {
  "id": "camera_733C8832_631F_052E_41CA_180DE8F63316",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 149.73,
   "pitch": 0
  }
 },
 {
  "id": "camera_732B7841_631F_056A_41C9_2F395E82C6FD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.78,
   "pitch": 0
  }
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderRadius": 0,
  "progressBorderSize": 0,
  "class": "ViewerArea",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "shadow": false,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "progressOpacity": 1,
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 4,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "playbackBarProgressBorderColor": "#000000",
  "progressLeft": 0,
  "minHeight": 50,
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "progressBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "class": "UIComponent",
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "top": 0,
  "visible": false,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent13557"
  },
  "bottom": 0,
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "shadow": false
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "class": "ZoomImage",
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "minWidth": 0,
  "scaleMode": "custom",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage13558"
  },
  "bottom": 0,
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "shadow": false
 },
 {
  "pressedIconColor": "#888888",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingRight": 5,
  "iconWidth": 20,
  "paddingLeft": 5,
  "iconColor": "#000000",
  "fontSize": 12,
  "mode": "push",
  "iconHeight": 20,
  "textDecoration": "none",
  "paddingTop": 5,
  "shadowSpread": 1,
  "borderRadius": 0,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "class": "CloseButton",
  "fontFamily": "Arial",
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "fontStyle": "normal",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "minWidth": 0,
  "fontWeight": "normal",
  "layout": "horizontal",
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "rollOverIconColor": "#666666",
  "borderColor": "#000000",
  "iconLineWidth": 5,
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "data": {
   "name": "CloseButton13559"
  },
  "shadowColor": "#000000",
  "fontColor": "#FFFFFF",
  "minHeight": 0,
  "paddingBottom": 5,
  "iconBeforeLabel": true,
  "label": "",
  "right": 10,
  "shadow": false
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "overflow": "visible",
 "creationPolicy": "delayed",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "data": {
  "name": "Player2871"
 },
 "horizontalAlign": "left",
 "minHeight": 20,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "shadow": false
})