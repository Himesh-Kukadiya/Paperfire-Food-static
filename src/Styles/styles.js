const defaultStyles = {
    body: {
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        color: "#E0E0E0",
        scrollBehavior: "smooth !important"
    },
    navbar: {
        backgroundColor: "#111",
        padding: "10px 0px",
        fontSize: "20px"
    },
    navbarLink: {
        color: "#E0E0E0 !important"
    },
    btnPrimary: {
        backgroundColor: "#E0E0E0",
        borderColor: "#E0E0E0",
        color: "#000",
        fontWeight: "bold"
    },
    btnPrimaryHover: {
        backgroundColor: "#1F1F1F",
        borderColor: "#1F1F1F",
        boxShadow: "0 0 8px #E0E0E0"
    },
    animated: {
        animationDuration: "1s",
        animationFillMode: "both"
    },
    fadeIn: {
        animationName: "fadeIn"
    },
    fadeInDown: {
        animationName: "fadeInDown"
    },
    fadeInUp: {
        animationName: "fadeInUp"
    },
    delay1s: {
        animationDelay: "1s"
    },
    delay2s: {
        animationDelay: "2s"
    }
};

const headerStyles = {
    header: {
        position: "relative",
        height: "100vh",
        color: "#FFF",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000"
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)"
    },
    headerImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0
    },
    headerContent: {
        position: "relative",
        zIndex: 2,
        textAlign: "center"
    }
};

const aboutStyles = {
    aboutSection: {
        padding: "60px 0",
        backgroundColor: "#111",
        color: "#E0E0E0"
    },
    sectionTitle: {
        fontSize: "2.5rem",
        fontWeight: 700,
        marginBottom: "20px"
    },
    sectionDescription: {
        fontSize: "1.1rem",
        lineHeight: 1.6,
        marginBottom: "20px"
    },
    aboutImage: {
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "100%",
        height: "auto"
    }
};

const servicesStyles = {
    servicesSection: {
        padding: "60px 0",
        backgroundColor: "#111",
        color: "#E0E0E0"
    },
    serviceCard: {
        backgroundColor: "#1F1F1F",
        borderRadius: "8px",
        padding: "20px",
        margin: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s"
    },
    serviceCardHover: {
        transform: "translateY(-5px)"
    },
    serviceTitle: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginBottom: "15px",
        color: "#E0E0E0"
    },
    serviceDescription: {
        fontSize: "1rem",
        lineHeight: 1.5
    }
};

const productsStyles = {
    products: {
        padding: "60px 0",
        backgroundColor: "#111",
        color: "#E0E0E0"
    },
    productGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
    },
    productCard: {
        backgroundColor: "#1F1F1F",
        borderRadius: "8px",
        overflow: "hidden",
        padding: "20px",
        textAlign: "center",
        flex: "1 1 calc(33.333% - 20px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative"
    },
    productCardImage: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px"
    },
    productCardTitle: {
        margin: "20px 0 10px",
        fontSize: "1.2rem",
        color: "#E0E0E0"
    },
    productCardDescription: {
        flexGrow: 1,
        marginBottom: "20px",
        fontSize: "0.9rem",
        color: "#B0B0B0",
        maxHeight: "3.6em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical"
    },
    productCardPrice: {
        fontSize: "1rem",
        color: "#FFFFFF",
        marginBottom: "10px"
    },
    productCardBtn: {
        backgroundColor: "#E0E0E0",
        border: "none",
        color: "#111",
        padding: "10px 20px",
        textDecoration: "none",
        display: "inline-block",
        marginTop: "10px",
        transition: "background-color 0.3s",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)"
    },
    productCardBtnHover: {
        backgroundColor: "#FFFFFF"
    }
};

const galleryStyles = {
    gallerySection: {
        padding: "60px 0",
        backgroundColor: "#111",
        color: "#E0E0E0"
    },
    galleryItem: {
        marginBottom: "30px",
        overflow: "hidden"
    },
    galleryItemImage: {
        width: "100%",
        height: "225px",
        objectFit: "cover",
        borderRadius: "8px",
        transition: "transform 0.3s ease"
    },
    galleryItemImageHover: {
        transform: "scale(1.1)"
    }
};

const testimonialsStyles = {
    testimonialsSection: {
        padding: "60px 0",
        backgroundColor: "#111",
        color: "#E0E0E0"
    },
    testimonialCard: {
        backgroundColor: "#1F1F1F",
        borderRadius: "8px",
        padding: "20px",
        margin: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s"
    },
    testimonialText: {
        fontStyle: "italic",
        marginBottom: "15px"
    },
    clientName: {
        fontWeight: "bold"
    }
};

const contactStyles = {
    contactSection: {
        padding: "60px 0",
        backgroundColor: "#111",
        color: "#E0E0E0"
    },
    contactImage: {
        borderRadius: "8px",
        maxWidth: "100%",
        height: "auto"
    },
    formControl: {
        backgroundColor: "#1F1F1F",
        color: "#E0E0E0",
        border: "1px solid #333"
    },
    formControlFocus: {
        backgroundColor: "#333",
        borderColor: "#666",
        color: "#fff"
    },
    btnPrimary: {
        backgroundColor: "#E0E0E0",
        borderColor: "#E0E0E0",
        color: "#111"
    },
    btnPrimaryHover: {
        backgroundColor: "#D0D0D0",
        borderColor: "#B0B0B0",
        color: "#111"
    }
};

const footerStyles = {
    footerSection: {
        padding: "40px 0",
        backgroundColor: "#1F1F1F",
        color: "#E0E0E0"
    },
    footerTitle: {
        fontSize: "1.5rem",
        marginBottom: "15px"
    },
    footerDescription: {
        marginBottom: "20px",
        fontSize: "0.9rem"
    },
    socialIcons: {
        marginTop: "10px"
    },
    socialIcon: {
        color: "#E0E0E0",
        fontSize: "1.2rem",
        marginRight: "10px",
        transition: "color 0.3s"
    },
    socialIconHover: {
        color: "#FFFFFF"
    },
    footerLinks: {
        listStyle: "none",
        padding: 0
    },
    footerContactInfo: {
        listStyle: "none",
        padding: 0
    },
    footerLinksItem: {
        marginBottom: "10px"
    },
    footerLinksAnchor: {
        color: "#E0E0E0",
        textDecoration: "none",
        transition: "color 0.3s"
    },
    footerLinksAnchorHover: {
        color: "#FFFFFF"
    },
    footerContactInfoIcon: {
        marginRight: "10px"
    },
    footerBottom: {
        textAlign: "center",
        marginTop: "20px",
        fontSize: "0.8rem"
    }
};

export default {
    defaultStyles,
    headerStyles,
    aboutStyles,
    servicesStyles,
    productsStyles,
    galleryStyles,
    testimonialsStyles,
    contactStyles,
    footerStyles
};
