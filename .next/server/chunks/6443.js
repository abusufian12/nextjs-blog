"use strict";
exports.id = 6443;
exports.ids = [6443];
exports.modules = {

/***/ 6443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ siteSettings)
/* harmony export */ });
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7507);

const siteSettings = {
    name: "PickBazar",
    description: "",
    logo: {
        url: "/logo.svg",
        alt: "PickBazar",
        href: "/grocery",
        width: 128,
        height: 40
    },
    defaultLanguage: "en",
    currencyCode: "USD",
    product: {
        placeholderImage: "/product-placeholder.svg",
        cardMaps: {
            grocery: "Krypton",
            furniture: "Radon",
            bag: "Oganesson",
            makeup: "Neon",
            book: "Xenon",
            medicine: "Helium",
            default: "Argon"
        }
    },
    authorizedLinks: [
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.profile */ .Z.profile,
            label: "auth-menu-profile"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.orders */ .Z.orders,
            label: "auth-menu-my-orders"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.wishlists */ .Z.wishlists,
            label: "profile-sidebar-my-wishlist"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.checkout */ .Z.checkout,
            label: "auth-menu-checkout"
        }
    ],
    authorizedLinksMobile: [
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.profile */ .Z.profile,
            label: "auth-menu-profile"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.orders */ .Z.orders,
            label: "auth-menu-my-orders"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.wishlists */ .Z.wishlists,
            label: "profile-sidebar-my-wishlist"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.refunds */ .Z.refunds,
            label: "text-my-refunds"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.checkout */ .Z.checkout,
            label: "auth-menu-checkout"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.changePassword */ .Z.changePassword,
            label: "profile-sidebar-password"
        }
    ],
    dashboardSidebarMenu: [
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.profile */ .Z.profile,
            label: "profile-sidebar-profile"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.changePassword */ .Z.changePassword,
            label: "profile-sidebar-password"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.orders */ .Z.orders,
            label: "profile-sidebar-orders"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.downloads */ .Z.downloads,
            label: "profile-sidebar-downloads"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.wishlists */ .Z.wishlists,
            label: "profile-sidebar-my-wishlist"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.questions */ .Z.questions,
            label: "profile-sidebar-my-questions"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.refunds */ .Z.refunds,
            label: "text-my-refunds"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.reports */ .Z.reports,
            label: "profile-sidebar-my-reports"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.help */ .Z.help,
            label: "profile-sidebar-help"
        },
        {
            href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.logout */ .Z.logout,
            label: "profile-sidebar-logout"
        }
    ],
    sellingAdvertisement: {
        image: {
            src: "/selling.png",
            alt: "Selling Advertisement"
        }
    },
    cta: {
        mockup_img_src: "/mockup-img.png",
        play_store_link: "/",
        app_store_link: "/"
    },
    footer: {
        copyright: {
            name: "RedQ, Inc",
            href: "https://redq.io/"
        },
        address: "2429 River Drive, Suite 35 Cottonhall, CA 2296 United Kingdom",
        email: "dummy@dummy.com",
        phone: "+1 256-698-0694",
        menus: [
            {
                title: "text-explore",
                links: [
                    {
                        name: "text-about-us",
                        href: "/"
                    },
                    {
                        name: "text-sitemap",
                        href: "/"
                    },
                    {
                        name: "text-bookmarks",
                        href: "/"
                    },
                    {
                        name: "text-sign-join",
                        href: "/"
                    }
                ]
            },
            {
                title: "text-customer-service",
                links: [
                    {
                        name: "text-faq-help",
                        href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.help */ .Z.help
                    },
                    {
                        name: "text-returns",
                        href: "/"
                    },
                    {
                        name: "text-accessibility",
                        href: "/"
                    },
                    {
                        name: "text-contact-us",
                        href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.contactUs */ .Z.contactUs
                    },
                    {
                        name: "text-store-pickup",
                        href: "/"
                    }
                ]
            },
            {
                title: "text-our-information",
                links: [
                    {
                        name: "text-privacy-update",
                        href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.privacy */ .Z.privacy
                    },
                    {
                        name: "text-terms-condition",
                        href: _config_routes__WEBPACK_IMPORTED_MODULE_0__/* .Routes.terms */ .Z.terms
                    },
                    {
                        name: "text-return-policy",
                        href: "/"
                    },
                    {
                        name: "text-sitemap",
                        href: "/"
                    }
                ]
            }
        ],
        payment_methods: [
            {
                img: "/payment/master.png",
                url: "/"
            },
            {
                img: "/payment/skrill.png",
                url: "/"
            },
            {
                img: "/payment/paypal.png",
                url: "/"
            },
            {
                img: "/payment/visa.png",
                url: "/"
            },
            {
                img: "/payment/discover.png",
                url: "/"
            }
        ]
    }
};


/***/ })

};
;