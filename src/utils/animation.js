export const imageAnimation = {
    initial: {
        scale: 0,
        opacity: 0,
        rotate: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        rotate: 360,
    }
}

export const cardAnimation = {
    initial: {
        scale: 0,
        opacity: 0,
        translateY: "100vw"
    },
    animate: {
        scale: 1,
        opacity: 1,
        translateY: 0
    }

}

export const sectionAnimation = {
    fromTop: {
        initial: {
            scale: 0,
            opacity: 0,
            translateY: "-100vw"
        },
        animate: {
            scale: 1,
            opacity: 1,
            translateY: 0
        }
    },
    fromBotton: {
        initial: {
            scale: 0,
            opacity: 0,
            translateY: "100vw"
        },
        animate: {
            scale: 1,
            opacity: 1,
            translateY: 0
        }
    }
}