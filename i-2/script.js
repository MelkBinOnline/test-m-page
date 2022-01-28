TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_t.jpg",
  "vfov": 180,
  "id": "panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890",
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "partial": false,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -147.87,
    "panorama": {
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_t.jpg",
     "vfov": 170.23,
     "id": "panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA",
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "partial": false,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -66.2,
       "panorama": {
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_t.jpg",
        "vfov": 180,
        "id": "panorama_872B35E9_8C1B_0D15_418F_AD74859ED024",
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "partial": false,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 138.7,
          "panorama": "this.panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA",
          "yaw": -66.2,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -51.1,
          "panorama": {
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_t.jpg",
           "vfov": 180,
           "id": "panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F",
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "partial": false,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 34.92,
             "panorama": "this.panorama_872B35E9_8C1B_0D15_418F_AD74859ED024",
             "yaw": -51.1,
             "distance": 1
            }
           ],
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "class": "ImageResourceLevel",
                "width": 6434,
                "url": "media/panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F.jpeg"
               }
              ]
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_872B35E9_8C1B_0D15_418F_AD74859ED024, this.camera_83F9D6C6_8C1F_0E19_41C2_F5A39F69C11B); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "id": "overlay_8180E9D3_8C0B_0506_41D3_2A0863834FE9",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 5.81,
                 "yaw": -51.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 47,
                    "class": "ImageResourceLevel",
                    "width": 58,
                    "url": "media/panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -27.95
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -51.1,
                 "hfov": 5.81,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 94,
                    "class": "ImageResourceLevel",
                    "width": 117,
                    "url": "media/panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -27.95
                }
               ]
              }
             ]
            }
           ],
           "label": "\u0628\u062e\u0634 4 \u0645\u0644\u06a9"
          },
          "yaw": 34.92,
          "distance": 1
         }
        ],
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024.jpeg"
            }
           ]
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA, this.camera_83DF3705_8C1F_0E1B_41E1_5377BED7C234); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "id": "overlay_81E34B9A_8C0B_050F_41C6_0AA0951D35F5",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.99,
              "yaw": -66.2,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 47,
                 "class": "ImageResourceLevel",
                 "width": 44,
                 "url": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.1
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -66.2,
              "hfov": 4.99,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 94,
                 "class": "ImageResourceLevel",
                 "width": 89,
                 "url": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -7.1
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F, this.camera_83C02724_8C1F_0E19_41A8_84D851D23DA7); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "id": "overlay_825BC497_8C0D_0310_41CD_1A8D919E62F7",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.24,
              "yaw": 34.92,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 72,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": 6.55
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 34.92,
              "hfov": 6.24,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 145,
                 "class": "ImageResourceLevel",
                 "width": 112,
                 "url": "media/panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_0_HS_1_0.png"
                }
               ]
              },
              "pitch": 6.55
             }
            ]
           }
          ]
         }
        ],
        "label": "\u0628\u062e\u0634 3 \u0645\u0644\u06a9"
       },
       "yaw": 138.7,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 15.81,
       "panorama": "this.panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890",
       "yaw": -147.87,
       "distance": 1
      }
     ],
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3043,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_hq.jpeg"
         },
         {
          "height": 1892,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA.jpeg"
         }
        ]
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_872B35E9_8C1B_0D15_418F_AD74859ED024, this.camera_83E1F6E5_8C1F_0E1A_41C0_3D608E8EE89B); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_82E520AE_8C0F_0336_41AB_9EAF21CD794C",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.7,
           "yaw": 138.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 60,
              "class": "ImageResourceLevel",
              "width": 60,
              "url": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -8.92
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 138.7,
           "hfov": 6.7,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 121,
              "class": "ImageResourceLevel",
              "width": 121,
              "url": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -8.92
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890, this.camera_83EBF6F5_8C1F_0FFB_41E1_63DFDE2BE34C); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_82A23024_8C0D_032D_4189_AAD6D815FB30",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.01,
           "yaw": -147.87,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "class": "ImageResourceLevel",
              "width": 53,
              "url": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -3.55
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -147.87,
           "hfov": 6.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 107,
              "url": "media/panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -3.55
          }
         ]
        }
       ]
      }
     ],
     "label": "\u0628\u062e\u0634 1 \u0645\u0644\u06a9"
    },
    "yaw": 15.81,
    "distance": 1
   }
  ],
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA, this.camera_9C371734_8C1F_0E79_41D0_F0F31BB8863B); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_82F33AB6_8C0D_0720_41DE_7C7285F04E16",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 15.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.53
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 15.81,
        "hfov": 5.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 81,
           "class": "ImageResourceLevel",
           "width": 94,
           "url": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 0.53
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'backgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'paddingLeft':5,'iconColor':'#000000'}, this.ImageResource_827FAA92_8C0B_07F7_4184_8C396FB3BF44, null, null, null, null, false)"
       }
      ],
      "id": "overlay_82A5A4E7_8C0B_0326_41C8_BB08C470E36E",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.51,
        "yaw": 151.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 49,
           "url": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 3.83
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 151.11,
        "hfov": 5.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 98,
           "url": "media/panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 3.83
       }
      ]
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 5.51,
      "yaw": 151.11,
      "hideEasing": "cubic_out",
      "id": "popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA_0_2.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 3.83
     }
    ]
   }
  ],
  "label": "\u0645\u062d\u0648\u0637\u0647 \u0645\u0644\u06a9"
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_camera",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.68,
   "pitch": -2.37
  }
 },
 "this.panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA",
 {
  "class": "PanoramaCamera",
  "id": "panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_camera",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.61,
   "pitch": -1.65
  }
 },
 "this.panorama_872B35E9_8C1B_0D15_418F_AD74859ED024",
 {
  "class": "PanoramaCamera",
  "id": "panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_camera",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.17,
   "pitch": -3.22
  }
 },
 "this.panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_camera",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.98,
   "pitch": -4.54
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_87A2F869_8C1D_0314_41DD_03B6E5A06890_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_87DB35F4_8C1B_0CFC_41B6_4F1267323EEA_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_872B35E9_8C1B_0D15_418F_AD74859ED024",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_872B35E9_8C1B_0D15_418F_AD74859ED024_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F",
    "camera": "this.panorama_87B9DF97_8C1D_1D3D_41D3_A4867C1AD68F_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 "this.popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_82FFDFD0_8C0B_1D77_41DE_21A9F478E0FA_0_3.jpg"
   }
  ],
  "id": "ImageResource_827FAA92_8C0B_07F7_4184_8C396FB3BF44"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_83F9D6C6_8C1F_0E19_41C2_F5A39F69C11B",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_83E1F6E5_8C1F_0E1A_41C0_3D608E8EE89B",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 113.8,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_83EBF6F5_8C1F_0FFB_41E1_63DFDE2BE34C",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -164.19,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_83DF3705_8C1F_0E1B_41E1_5377BED7C234",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -41.3,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_83C02724_8C1F_0E19_41A8_84D851D23DA7",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9C371734_8C1F_0E79_41D0_F0F31BB8863B",
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
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 32.13,
   "pitch": 0
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "toolTipPaddingRight": 6,
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipPaddingLeft": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "paddingLeft": 0,
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipPaddingTop": 4,
  "progressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "paddingBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "minHeight": 50,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "width": "100%",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressLeft": 0,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "id": "MainViewer",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "minWidth": 100,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "transitionDuration": 500,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0
 },
 {
  "class": "UIComponent",
  "borderSize": 0,
  "minHeight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "top": 0,
  "visible": false,
  "minWidth": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "data": {
   "name": "UIComponent9139"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "shadow": false
 },
 {
  "class": "ZoomImage",
  "borderSize": 0,
  "minHeight": 0,
  "backgroundColor": [],
  "paddingLeft": 0,
  "paddingTop": 0,
  "paddingRight": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "top": 0,
  "visible": false,
  "minWidth": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "data": {
   "name": "ZoomImage9140"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "shadow": false
 },
 {
  "pressedIconColor": "#888888",
  "class": "CloseButton",
  "borderSize": 0,
  "label": "",
  "iconBeforeLabel": true,
  "minHeight": 0,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowBlurRadius": 6,
  "iconWidth": 20,
  "mode": "push",
  "paddingLeft": 5,
  "iconHeight": 20,
  "fontSize": 12,
  "paddingTop": 5,
  "gap": 5,
  "textDecoration": "none",
  "paddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderRadius": 0,
  "shadowSpread": 1,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "fontFamily": "Arial",
  "fontWeight": "normal",
  "horizontalAlign": "center",
  "rollOverIconColor": "#666666",
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "iconLineWidth": 5,
  "minWidth": 0,
  "layout": "horizontal",
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "CloseButton9141"
  },
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "fontColor": "#FFFFFF",
  "fontStyle": "normal",
  "right": 10,
  "shadow": false,
  "iconColor": "#000000"
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "borderSize": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "verticalAlign": "top",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "scripts": {
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "scrollBarWidth": 10,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player435"
 },
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "contentOpaque": false,
 "overflow": "visible"
})