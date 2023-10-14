import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    props.resData.card.card.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resObject = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "65533",
          name: "Potful - Claypot Biryanis",
          cloudinaryImageId: "d874577e3c5ea2f730f6e22ceeae7ad4",
          locality: "Jakkasandra",
          areaName: "Koramangala",
          costForTwo: "₹350 for two",
          cuisines: ["Biryani", "Kebabs", "North Indian", "Mughlai"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "65533",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3500,
          },
          parentId: "160121",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "45 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=65533&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "485933",
          name: "Dindigul Thalappakatti",
          cloudinaryImageId: "cluiug5t7vmz7idrhh82",
          locality: "Nexus",
          areaName: "Koramangala",
          costForTwo: "₹500 for two",
          cuisines: ["South Indian", "Biryani", "Chinese", "North Indian"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "485933",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4900,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4900,
          },
          parentId: "332",
          avgRatingString: "4.0",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=485933&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "318592",
          name: "EatBae",
          cloudinaryImageId: "qfhhkifflmolebugawc6",
          locality: "4th Block",
          areaName: "Koramangala",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Biryani",
            "Chinese",
            "Tandoor",
            "South Indian",
          ],
          avgRating: 3.5,
          feeDetails: {
            restaurantId: "318592",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "20937",
          avgRatingString: "3.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=318592&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "92243",
          name: "Aligarh House -Mughlai Biryani",
          cloudinaryImageId: "ef0e1cdb0fc48b9ff93b4366c1221036",
          locality: "6th Block",
          areaName: "Koramangala",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Kebabs",
            "North Indian",
            "Lucknowi",
            "Fast Food",
            "Desserts",
            "Beverages",
          ],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "92243",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "346372",
          avgRatingString: "3.9",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "16 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=92243&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "456391",
          name: "Ambur Star Briyani Since 1890",
          cloudinaryImageId: "yuxfjh6uax8zmjjjbdzh",
          locality: "5th Block",
          areaName: "Koramangala",
          costForTwo: "₹330 for two",
          cuisines: ["Biryani", "Chinese", "South Indian", "Tandoor"],
          avgRating: 3.8,
          feeDetails: {
            restaurantId: "456391",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4900,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4900,
          },
          parentId: "21400",
          avgRatingString: "3.8",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "16 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=456391&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "227164",
          name: "Donne Biryani Mandi",
          cloudinaryImageId: "fk7bnuq7kfueqrgkiykm",
          locality: "1st Stage",
          areaName: "Btm Layout",
          costForTwo: "₹150 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "South Indian",
            "Desserts",
            "Kebabs",
            "Beverages",
            "Kerala",
            "Indian",
          ],
          avgRating: 3.8,
          feeDetails: {
            restaurantId: "227164",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "14719",
          avgRatingString: "3.8",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 00:30:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=227164&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "581808",
          name: "Barbeque Nation",
          cloudinaryImageId: "koxmlppfprrurmmcvxp9",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 3.5,
          feeDetails: {
            restaurantId: "581808",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4900,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4900,
          },
          parentId: "2438",
          avgRatingString: "3.5",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "40 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=581808&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "260444",
          name: "Donne Biryani",
          cloudinaryImageId: "yycgavmzhl9gitnisx4d",
          locality: "1st Stage",
          areaName: "Btm Layout",
          costForTwo: "₹100 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "South Indian",
            "Desserts",
            "Kebabs",
            "Beverages",
            "Kerala",
            "Indian",
          ],
          avgRating: 3.7,
          feeDetails: {
            restaurantId: "260444",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "14710",
          avgRatingString: "3.7",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=260444&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "292770",
          name: "Charminar Biryani House",
          cloudinaryImageId: "fnsrpgmugggdggy3zorn",
          locality: "1st  Stage",
          areaName: "BTM Layout",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "North Indian"],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "292770",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4300,
          },
          parentId: "58180",
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 03:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            discountTag: "FLAT DEAL",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=292770&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "5287",
          name: "Junior Kuppanna",
          cloudinaryImageId: "cafishour9sdqtpgsaz5",
          locality: "6th Sector",
          areaName: "HSR Layout",
          costForTwo: "₹450 for two",
          cuisines: ["Chettinad", "South Indian"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "5287",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4500,
          },
          parentId: "112209",
          avgRatingString: "4.0",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "31 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 22:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=5287&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "423126",
          name: "Salem Mess",
          cloudinaryImageId: "a96ac51e94fdbda10a6ef9204ba73534",
          locality: "Ayappa Garden",
          areaName: "Adugodi",
          costForTwo: "₹200 for two",
          cuisines: ["Indian"],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "423126",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "176133",
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "24 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=423126&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "240901",
          name: "U R Military Hotel",
          cloudinaryImageId: "uw5k4efkxno73gzrga8e",
          locality: "1st Stage",
          areaName: "Btm Layout",
          costForTwo: "₹100 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "South Indian",
            "Desserts",
            "Kebabs",
            "Beverages",
            "Kerala",
            "Indian",
          ],
          avgRating: 3.7,
          feeDetails: {
            restaurantId: "240901",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "14715",
          avgRatingString: "3.7",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "18 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=240901&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "598706",
          name: "Delhi Biryani Point",
          cloudinaryImageId: "rw7tkrpmz55vvtmt8hdj",
          locality: "1st  Stage",
          areaName: "BTM Layout",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "598706",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4300,
          },
          parentId: "357615",
          avgRatingString: "4.0",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "22 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=598706&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "639523",
          name: "Dum Safar Biryani by Barbeque Nation",
          cloudinaryImageId: "nf2m5ncs83fslj3v3ody",
          locality: "7th Block",
          areaName: "DAVAR ATRIUM",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "639523",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "351013",
          avgRatingString: "4.0",
          totalRatingsString: "2",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "34 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=639523&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "186101",
          name: "The Biryani Life",
          cloudinaryImageId: "ggd0zsrhjn6bija7olci",
          locality: "Jakkasandra",
          areaName: "Hsr Layout 5th Sector",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4,
          feeDetails: {
            restaurantId: "186101",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "8496",
          avgRatingString: "4.0",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "26 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=186101&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "285175",
          name: "Thalairaj Biryani",
          cloudinaryImageId: "1e9f2a656c0e752a5a0ff80ea302c1ab",
          locality: "2nd stage",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Andhra",
            "Biryani",
            "Hyderabadi",
            "South Indian",
            "Indian",
            "Combo",
            "Beverages",
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "285175",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5400,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5400,
          },
          parentId: "433875",
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=8578602~p=1~eid=0000018b-286a-dfe7-34ab-a1d100ff0153~srvts=1697190174695~83639",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=285175&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "275",
          name: "Mani's Dum Biryani",
          cloudinaryImageId: "49525bb8fd8413546f67907e2174db0b",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹400 for two",
          cuisines: ["Andhra", "Biryani"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "275",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2900,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2900,
          },
          parentId: "623",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:45:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=275&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "270",
          name: "Donne Biryani House",
          cloudinaryImageId: "ywybr0zzpvdoo6ywczhm",
          locality: "7th Block",
          areaName: "Koramangala",
          costForTwo: "₹130 for two",
          cuisines: ["Biryani"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "270",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2900,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2900,
          },
          parentId: "338",
          avgRatingString: "4.0",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 16:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=270&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "18973",
          name: "Nandhana Palace",
          cloudinaryImageId: "0387817e239462fcfb98a1f568fa1a76",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "18973",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "2120",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          promoted: true,
          adTrackingId:
            "cid=8825619~p=3~eid=0000018b-286a-dfe7-34ab-a1d300ff0360~srvts=1697190174695~83639",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "15 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹900",
            discountTag: "FLAT DEAL",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=18973&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "229",
          name: "Meghana Foods",
          cloudinaryImageId: "iivuhjc2mswi9lublktf",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood",
          ],
          avgRating: 4.4,
          feeDetails: {
            restaurantId: "229",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "635",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "15 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3454",
          name: "Lazeez",
          cloudinaryImageId: "7c1d4da97f19afff911c4775ad2e352a",
          locality: "5th Block",
          areaName: "Koramangala",
          costForTwo: "₹500 for two",
          cuisines: ["North Indian", "Mughlai"],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "3454",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3500,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3500,
          },
          parentId: "588",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "16 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-13 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3454&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "381853",
          name: "ITC Master Chef Creations",
          cloudinaryImageId: "6c6d2fed84844c64224d4e84ad55c8b3",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹650 for two",
          cuisines: [
            "North Indian",
            "Biryani",
            "Indian",
            "Punjabi",
            "Chaat",
            "Kebabs",
            "Tandoor",
            "Mughlai",
            "Desserts",
            "Snacks",
          ],
          avgRating: 4.5,
          feeDetails: {
            restaurantId: "381853",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "11992",
          avgRatingString: "4.5",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=8524283~p=5~eid=0000018b-286a-dfe7-34ab-a1d500ff0522~srvts=1697190174695~83639",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "22 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-10-14 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
          },
          loyaltyDiscoverPresentationInfo: {
            badgeType: "BADGE_TYPE_OFFER_PACK",
            offerSubText: "with offer pack",
            nonSwiggyOneFreedelMessage: "FREE DELIVERY",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=381853&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObject.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
