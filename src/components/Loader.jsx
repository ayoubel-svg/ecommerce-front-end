import React from "react";
import { motion } from "framer-motion"
const svgVariants = {
    hidden: {
        rotate: -100
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}
const pathVariant = {
    hidden: {
        opacity: 0,
        pathlength: 0
    },
    visible: {
        opacity: 1,
        pathlength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}
const Loader = () => {
    return (
        <div className="loader-container">
            <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                width="395" height="64" viewBox="0 0 395 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={pathVariant}
                    fill="black"
                    d="M110.903 13.44C110.983 13.3867 111.317 13.36 111.903 13.36C112.543 13.36 112.903 13.4267 112.983 13.56C113.037 13.6133 113.29 17.9467 113.743 26.56C114.17 35.1467 114.41 39.4667 114.463 39.52C114.543 39.6 114.623 39.64 114.703 39.64C114.997 39.72 115.677 39.76 116.743 39.76C117.25 39.76 117.53 39.7867 117.583 39.84C117.743 39.8933 117.823 40.0133 117.823 40.2L117.423 41.76C117.317 41.92 117.05 41.9867 116.623 41.96C116.517 41.96 116.29 41.96 115.943 41.96C114.13 41.8533 111.703 41.84 108.663 41.92C108.397 41.9467 108.17 41.96 107.983 41.96C107.103 41.9867 106.61 41.92 106.503 41.76C106.45 41.68 106.477 41.3733 106.583 40.84C106.717 40.28 106.837 39.9467 106.943 39.84C107.023 39.7867 107.237 39.76 107.583 39.76C108.677 39.76 109.437 39.6533 109.863 39.44L110.063 39.36V39.04L109.903 36.56C109.85 35.0933 109.81 34.3333 109.783 34.28V34.16H105.703H101.583L100.463 36.2C99.6899 37.5867 99.2766 38.4 99.2233 38.64C99.0899 39.0933 99.4099 39.4267 100.183 39.64C100.397 39.6933 100.637 39.7333 100.903 39.76C101.277 39.76 101.503 39.8533 101.583 40.04C101.61 40.1733 101.557 40.48 101.423 40.96C101.317 41.4667 101.21 41.7733 101.103 41.88L100.983 42H100.463C98.0899 41.8667 95.6899 41.8533 93.2633 41.96C92.6766 41.9867 92.3433 41.92 92.2633 41.76C92.2099 41.68 92.2366 41.3733 92.3433 40.84C92.5033 40.2267 92.6499 39.8933 92.7833 39.84C92.8633 39.8133 93.0633 39.7867 93.3833 39.76C95.0899 39.68 96.3166 39.1067 97.0633 38.04C97.2233 37.8267 99.5033 33.72 103.903 25.72L110.583 13.64C110.69 13.56 110.797 13.4933 110.903 13.44ZM109.423 26.44C109.21 22.7067 109.103 20.8267 109.103 20.8V20.56L105.943 26.24L102.823 31.88L106.223 31.92C108.517 31.92 109.663 31.9067 109.663 31.88L109.423 26.44ZM127.27 24.4C127.457 24.3467 127.75 24.32 128.15 24.32C128.763 24.3467 129.297 24.48 129.75 24.72C130.097 24.9067 130.363 25.1067 130.55 25.32C130.763 25.5067 130.963 25.7733 131.15 26.12C131.39 26.6267 131.497 27.16 131.47 27.72C131.47 28.2533 131.297 28.9867 130.95 29.92C130.923 30.0533 130.87 30.2133 130.79 30.4C129.483 34.0267 128.83 36.5067 128.83 37.84C128.83 37.9467 128.83 38.04 128.83 38.12C128.857 39.0267 129.07 39.6933 129.47 40.12C129.763 40.3867 130.163 40.52 130.67 40.52C131.203 40.52 131.67 40.4133 132.07 40.2C132.763 39.8533 133.363 39.2933 133.87 38.52L134.11 38.12L135.59 32.2C136.63 28.0667 137.23 25.88 137.39 25.64C137.417 25.5867 137.483 25.5067 137.59 25.4C138.177 24.8133 138.843 24.6133 139.59 24.8C140.23 25.0133 140.577 25.4267 140.63 26.04C140.63 26.2267 139.963 29.0133 138.63 34.4C137.323 39.6267 136.59 42.48 136.43 42.96C136.163 43.84 135.75 44.6667 135.19 45.44C135.003 45.76 134.79 46.0667 134.55 46.36C134.017 47.0267 133.443 47.6 132.83 48.08C131.683 49.04 130.457 49.6667 129.15 49.96C128.67 50.0933 128.07 50.16 127.35 50.16C126.79 50.16 126.377 50.1333 126.11 50.08C124.323 49.68 123.31 48.72 123.07 47.2C122.99 46.5333 123.083 45.88 123.35 45.24C123.777 44.36 124.497 43.8667 125.51 43.76C126.363 43.68 126.95 43.9867 127.27 44.68C127.35 44.8133 127.403 45.0267 127.43 45.32C127.457 46.0133 127.203 46.6533 126.67 47.24C126.43 47.4267 126.243 47.56 126.11 47.64C126.003 47.6933 125.937 47.7333 125.91 47.76L126.59 48.16C127.683 48.5333 128.79 48.32 129.91 47.52C131.297 46.48 132.35 44.7467 133.07 42.32C133.123 42.0267 133.177 41.8267 133.23 41.72V41.56L132.91 41.72C131.63 42.4667 130.217 42.64 128.67 42.24C126.91 41.8133 125.83 40.6667 125.43 38.8C125.323 38.1067 125.323 37.28 125.43 36.32C125.457 36.24 125.47 36.1733 125.47 36.12C125.683 34.7867 126.31 32.7467 127.35 30C127.83 28.5867 128.097 27.68 128.15 27.28C128.283 26.6667 128.217 26.32 127.95 26.24C127.63 26.1333 127.257 26.2 126.83 26.44C126.27 26.7867 125.83 27.3333 125.51 28.08C125.243 28.56 124.95 29.3733 124.63 30.52C124.55 30.68 124.497 30.7733 124.47 30.8C124.417 30.8533 124.097 30.88 123.51 30.88H122.63L122.51 30.76C122.43 30.68 122.39 30.5733 122.39 30.44C122.443 30.0133 122.67 29.3467 123.07 28.44C123.39 27.7467 123.723 27.1733 124.07 26.72C124.417 26.24 124.857 25.76 125.39 25.28C125.977 24.8267 126.603 24.5333 127.27 24.4ZM152.883 24.36C152.936 24.3333 153.216 24.32 153.723 24.32C154.443 24.3467 155.083 24.4533 155.643 24.64C157.856 25.3867 159.23 27 159.763 29.48C159.816 29.8 159.843 30.3067 159.843 31C159.87 31.88 159.79 32.68 159.603 33.4C159.23 34.8933 158.59 36.28 157.683 37.56C156.03 39.88 153.963 41.4 151.483 42.12C150.816 42.3067 150.163 42.4133 149.523 42.44C147.23 42.52 145.47 41.6933 144.243 39.96C144.083 39.7733 143.95 39.5733 143.843 39.36C142.563 37.0667 142.603 34.3733 143.963 31.28C144.603 29.8933 145.456 28.6667 146.523 27.6C147.536 26.5867 148.59 25.8267 149.683 25.32C150.75 24.7867 151.816 24.4667 152.883 24.36ZM154.123 26.28C153.563 26.2 153.11 26.1867 152.763 26.24C151.456 26.48 150.376 27.12 149.523 28.16C148.75 29.0933 148.083 30.6533 147.523 32.84C147.47 33.0267 147.416 33.2133 147.363 33.4C146.936 35.16 146.723 36.4667 146.723 37.32C146.723 37.88 146.75 38.2533 146.803 38.44C147.123 39.6933 147.896 40.3867 149.123 40.52C149.656 40.5733 150.216 40.5067 150.803 40.32C152.216 39.8667 153.336 38.84 154.163 37.24C154.616 36.4133 155.07 35.0533 155.523 33.16C156.11 30.84 156.27 29.1867 156.003 28.2C155.736 27.2133 155.11 26.5733 154.123 26.28ZM167.153 24.4C167.339 24.3467 167.633 24.32 168.033 24.32C168.646 24.3467 169.179 24.48 169.633 24.72C169.979 24.9067 170.246 25.1067 170.433 25.32C170.646 25.5067 170.846 25.7733 171.033 26.12C171.273 26.6267 171.379 27.16 171.353 27.72C171.353 28.2533 171.179 28.9867 170.833 29.92C170.806 30.0533 170.753 30.2133 170.673 30.4C169.366 34.0267 168.713 36.5067 168.713 37.84C168.713 37.9467 168.713 38.04 168.713 38.12C168.739 39.0267 168.953 39.6933 169.353 40.12C169.646 40.3867 170.046 40.52 170.553 40.52C171.086 40.52 171.553 40.4133 171.953 40.2C172.646 39.8533 173.246 39.2933 173.753 38.52L173.993 38.12L175.473 32.2C176.513 28.0667 177.113 25.88 177.273 25.64C177.299 25.5867 177.366 25.5067 177.473 25.4C178.059 24.8133 178.726 24.6133 179.473 24.8C180.113 25.0133 180.459 25.4267 180.513 26.04C180.513 26.2533 180.033 28.3067 179.073 32.2C178.139 35.8533 177.619 37.96 177.513 38.52C177.406 39.2667 177.393 39.7867 177.473 40.08C177.526 40.1867 177.593 40.2933 177.673 40.4C177.753 40.4533 177.886 40.5067 178.073 40.56C178.233 40.56 178.366 40.52 178.473 40.44C179.033 40.0933 179.566 38.8667 180.073 36.76C180.233 36.2267 180.366 35.9467 180.473 35.92C180.553 35.8933 180.846 35.88 181.353 35.88C181.939 35.88 182.273 35.9067 182.353 35.96C182.406 36.0133 182.433 36.12 182.433 36.28C182.433 36.6533 182.219 37.4133 181.793 38.56C181.473 39.44 181.139 40.12 180.793 40.6C180.046 41.7467 179.113 42.36 177.993 42.44C176.633 42.4933 175.553 42.0267 174.753 41.04L174.473 40.68C174.419 40.6 174.393 40.5467 174.393 40.52L174.113 40.8C173.126 41.7067 172.046 42.24 170.873 42.4C169.726 42.5333 168.686 42.3867 167.753 41.96C166.446 41.4 165.633 40.3467 165.313 38.8C165.206 38.1067 165.206 37.28 165.313 36.32C165.339 36.24 165.353 36.1733 165.353 36.12C165.566 34.7867 166.193 32.7467 167.233 30C167.713 28.5867 167.979 27.68 168.033 27.28C168.166 26.6667 168.099 26.32 167.833 26.24C167.513 26.1333 167.139 26.2 166.713 26.44C166.153 26.7867 165.713 27.3333 165.393 28.08C165.126 28.56 164.833 29.3733 164.513 30.52C164.433 30.68 164.379 30.7733 164.353 30.8C164.299 30.8533 163.979 30.88 163.393 30.88H162.513L162.393 30.76C162.313 30.68 162.273 30.5733 162.273 30.44C162.326 30.0133 162.553 29.3467 162.953 28.44C163.273 27.7467 163.606 27.1733 163.953 26.72C164.299 26.24 164.739 25.76 165.273 25.28C165.859 24.8267 166.486 24.5333 167.153 24.4ZM190.077 14.48C192.157 14.32 193.184 14.24 193.157 14.24C193.397 14.24 193.557 14.3333 193.637 14.52C193.664 14.6267 193.224 16.4933 192.317 20.12L190.957 25.6L191.357 25.36C192.53 24.64 193.65 24.2933 194.717 24.32C196.424 24.4 197.73 25.1333 198.637 26.52C199.064 27.16 199.397 27.92 199.637 28.8C199.904 30.16 199.877 31.5467 199.557 32.96C199.157 35.04 198.29 36.9067 196.957 38.56C196.397 39.28 195.81 39.88 195.197 40.36C194.024 41.3467 192.73 42 191.317 42.32C191.077 42.3733 190.704 42.4 190.197 42.4C189.69 42.4 189.304 42.3733 189.037 42.32C188.477 42.1867 187.93 41.9333 187.397 41.56C186.73 41.08 186.224 40.48 185.877 39.76C185.504 38.9867 185.25 38.1467 185.117 37.24C185.037 36.52 185.05 35.6533 185.157 34.64C185.21 34.24 185.93 31.2667 187.317 25.72C188.677 20.28 189.304 17.4533 189.197 17.24C189.01 17.0533 188.437 16.9467 187.477 16.92C186.837 16.92 186.464 16.8267 186.357 16.64L186.317 16.52L186.517 15.72C186.624 15.2133 186.73 14.9067 186.837 14.8C186.917 14.72 186.997 14.68 187.077 14.68L190.077 14.48ZM194.837 26.32C194.597 26.2133 194.21 26.1867 193.677 26.24C192.904 26.4533 192.117 26.9733 191.317 27.8C190.89 28.2267 190.49 28.7333 190.117 29.32C190.064 29.3733 189.81 30.24 189.357 31.92L188.597 35C188.064 37.5067 188.21 39.16 189.037 39.96C189.277 40.2267 189.57 40.4 189.917 40.48C190.77 40.72 191.664 40.4133 192.597 39.56C193.45 38.84 194.144 37.5867 194.677 35.8C194.864 35.1867 195.077 34.4 195.317 33.44C195.877 31.1733 196.157 29.6133 196.157 28.76C196.157 28.2 196.09 27.76 195.957 27.44C195.77 26.9067 195.397 26.5333 194.837 26.32ZM203.435 31.84C203.515 31.7867 205.089 31.76 208.155 31.76H212.755L212.915 31.88C212.995 32.0133 213.035 32.12 213.035 32.2L212.355 34.8L212.195 34.96C212.142 34.9867 210.595 35 207.555 35C204.435 35 202.835 34.9333 202.755 34.8C202.702 34.7467 202.675 34.6667 202.675 34.56L203.275 32.04C203.302 31.9867 203.355 31.92 203.435 31.84ZM229.971 13.88C230.771 13.7467 231.598 13.7733 232.451 13.96C233.251 14.12 233.958 14.4 234.571 14.8C234.891 15.0133 235.265 15.36 235.691 15.84C235.771 15.9733 235.825 16.0533 235.851 16.08L236.931 14.96C237.678 14.2133 238.065 13.84 238.091 13.84C238.091 13.8133 238.211 13.8 238.451 13.8C238.745 13.8 238.931 13.88 239.011 14.04C239.038 14.1467 238.665 15.7467 237.891 18.84C237.091 21.9867 236.665 23.5867 236.611 23.64L236.491 23.76H235.651C234.958 23.76 234.585 23.6933 234.531 23.56C234.505 23.4533 234.518 23.2267 234.571 22.88C234.998 20.08 234.651 18.12 233.531 17C232.918 16.36 232.038 16 230.891 15.92C229.585 15.8933 228.398 16.4133 227.331 17.48C226.771 18.04 226.345 18.6133 226.051 19.2C225.571 20.2133 225.345 21.1867 225.371 22.12C225.398 22.7333 225.505 23.2133 225.691 23.56C225.958 24.12 226.331 24.52 226.811 24.76C226.865 24.7867 227.718 25.0533 229.371 25.56C231.211 26.0933 232.305 26.4667 232.651 26.68C234.358 27.6667 235.238 29.3867 235.291 31.84C235.318 33.7867 234.771 35.7333 233.651 37.68C232.798 39.2 231.638 40.4533 230.171 41.44C229.158 42.1067 228.105 42.5467 227.011 42.76C226.745 42.8133 226.305 42.84 225.691 42.84C224.785 42.84 224.011 42.76 223.371 42.6C222.065 42.2533 221.011 41.6667 220.211 40.84L219.891 40.52L218.811 41.64L217.651 42.84L217.251 42.88H217.211C216.998 42.88 216.851 42.84 216.771 42.76C216.691 42.68 216.651 42.6133 216.651 42.56C216.651 42.48 217.425 39.3467 218.971 33.16C219.158 33 219.531 32.92 220.091 32.92H220.931L221.051 33.04C221.158 33.1467 221.171 33.4133 221.091 33.84C221.091 33.8933 221.078 33.96 221.051 34.04C220.731 35.6133 220.811 36.9333 221.291 38C221.851 39.3867 223.025 40.2267 224.811 40.52C225.585 40.6533 226.198 40.68 226.651 40.6C228.065 40.36 229.291 39.4133 230.331 37.76C230.731 37.12 231.038 36.44 231.251 35.72C231.411 35.1333 231.491 34.48 231.491 33.76C231.491 33.0667 231.411 32.5333 231.251 32.16C230.985 31.4933 230.585 31.04 230.051 30.8C229.865 30.6933 228.998 30.4133 227.451 29.96C225.851 29.5067 224.905 29.2133 224.611 29.08C224.078 28.8133 223.585 28.4533 223.131 28C221.958 26.7733 221.451 25.1733 221.611 23.2C221.771 21.28 222.478 19.4533 223.731 17.72C224.398 16.8933 225.105 16.2 225.851 15.64C227.185 14.6267 228.558 14.04 229.971 13.88ZM246.872 17.04C247.246 16.9067 247.632 16.92 248.032 17.08C248.379 17.2133 248.632 17.44 248.792 17.76C248.926 18.0533 248.886 18.6133 248.672 19.44C248.592 19.7867 248.419 20.52 248.152 21.64C247.592 23.6933 247.326 24.7067 247.352 24.68C247.352 24.7333 247.926 24.76 249.072 24.76H250.792L250.912 24.88C251.072 24.9867 251.072 25.3333 250.912 25.92C250.832 26.32 250.752 26.6 250.672 26.76C250.592 26.8933 250.339 26.9733 249.912 27C249.726 27 249.286 27 248.592 27H246.792L246.752 27.16C244.966 34.12 244.032 37.9067 243.952 38.52C243.899 38.84 243.872 39.1333 243.872 39.4C243.872 40.1467 244.086 40.5333 244.512 40.56C244.672 40.56 244.859 40.5333 245.072 40.48C245.446 40.4533 245.846 40.2667 246.272 39.92C247.206 39.2 247.979 38.04 248.592 36.44C248.726 36.12 248.872 35.9467 249.032 35.92C249.112 35.8933 249.379 35.88 249.832 35.88C250.419 35.88 250.739 35.9067 250.792 35.96C250.952 36.0933 250.952 36.36 250.792 36.76C250.286 37.9867 249.686 39 248.992 39.8C247.926 41.16 246.699 42 245.312 42.32C245.099 42.3733 244.752 42.4 244.272 42.4C243.792 42.4 243.459 42.3733 243.272 42.32C242.526 42.1067 241.926 41.7867 241.472 41.36C241.046 40.9333 240.739 40.4133 240.552 39.8C240.499 39.5867 240.472 39.2267 240.472 38.72V37.96L241.832 32.52C242.739 28.9467 243.192 27.12 243.192 27.04C243.192 27.0133 242.632 27 241.512 27C240.339 27 239.699 26.9067 239.592 26.72C239.539 26.64 239.566 26.3467 239.672 25.84C239.832 25.3067 239.926 25.0267 239.952 25C240.032 24.84 240.312 24.76 240.792 24.76C240.979 24.76 241.379 24.76 241.992 24.76H243.792L244.552 21.64C245.059 19.5867 245.379 18.4267 245.512 18.16C245.752 17.6267 246.206 17.2533 246.872 17.04ZM263.274 24.36C263.327 24.3333 263.607 24.32 264.114 24.32C264.834 24.3467 265.474 24.4533 266.034 24.64C268.247 25.3867 269.62 27 270.154 29.48C270.207 29.8 270.234 30.3067 270.234 31C270.26 31.88 270.18 32.68 269.994 33.4C269.62 34.8933 268.98 36.28 268.074 37.56C266.42 39.88 264.354 41.4 261.874 42.12C261.207 42.3067 260.554 42.4133 259.914 42.44C257.62 42.52 255.86 41.6933 254.634 39.96C254.474 39.7733 254.34 39.5733 254.234 39.36C252.954 37.0667 252.994 34.3733 254.354 31.28C254.994 29.8933 255.847 28.6667 256.914 27.6C257.927 26.5867 258.98 25.8267 260.074 25.32C261.14 24.7867 262.207 24.4667 263.274 24.36ZM264.514 26.28C263.954 26.2 263.5 26.1867 263.154 26.24C261.847 26.48 260.767 27.12 259.914 28.16C259.14 29.0933 258.474 30.6533 257.914 32.84C257.86 33.0267 257.807 33.2133 257.754 33.4C257.327 35.16 257.114 36.4667 257.114 37.32C257.114 37.88 257.14 38.2533 257.194 38.44C257.514 39.6933 258.287 40.3867 259.514 40.52C260.047 40.5733 260.607 40.5067 261.194 40.32C262.607 39.8667 263.727 38.84 264.554 37.24C265.007 36.4133 265.46 35.0533 265.914 33.16C266.5 30.84 266.66 29.1867 266.394 28.2C266.127 27.2133 265.5 26.5733 264.514 26.28ZM276.663 24.4C277.117 24.2667 277.69 24.28 278.383 24.44C278.81 24.5467 279.237 24.7467 279.663 25.04C280.09 25.36 280.397 25.6933 280.583 26.04L280.743 26.28L281.103 25.92C281.61 25.4667 282.117 25.1067 282.623 24.84C283.583 24.36 284.57 24.2 285.583 24.36C287.37 24.6533 288.49 25.4933 288.943 26.88C289.077 27.28 289.13 27.7067 289.103 28.16C289.023 29.1733 288.677 29.92 288.063 30.4C287.157 31.0667 286.317 31.1867 285.543 30.76C285.223 30.6 284.997 30.36 284.863 30.04C284.783 29.9067 284.73 29.6933 284.703 29.4C284.703 28.9467 284.797 28.5333 284.983 28.16C285.277 27.6267 285.637 27.2667 286.063 27.08C286.223 27 286.303 26.9333 286.303 26.88C286.223 26.72 285.97 26.56 285.543 26.4C284.983 26.16 284.397 26.1333 283.783 26.32C282.823 26.6667 281.903 27.7067 281.023 29.44C280.917 29.6533 280.383 31.64 279.423 35.4C278.463 39.2667 277.903 41.32 277.743 41.56C277.717 41.6133 277.65 41.6933 277.543 41.8C276.983 42.36 276.33 42.56 275.583 42.4C274.917 42.2133 274.557 41.8 274.503 41.16C274.503 40.92 275.01 38.76 276.023 34.68C277.063 30.6533 277.61 28.4533 277.663 28.08C277.743 27.3867 277.717 26.88 277.583 26.56C277.477 26.3733 277.303 26.2533 277.063 26.2C276.903 26.2 276.77 26.24 276.663 26.32C276.397 26.5067 276.143 26.8267 275.903 27.28C275.637 27.92 275.303 29 274.903 30.52C274.823 30.68 274.77 30.7733 274.743 30.8C274.69 30.8533 274.37 30.88 273.783 30.88H272.903L272.783 30.76C272.703 30.68 272.663 30.5733 272.663 30.44L272.903 29.48C273.597 27.16 274.45 25.64 275.463 24.92C275.89 24.6533 276.29 24.48 276.663 24.4ZM300.258 24.36C301.085 24.2533 301.832 24.28 302.498 24.44C302.898 24.5467 303.312 24.6933 303.738 24.88C304.698 25.36 305.312 26.0667 305.578 27C305.632 27.1867 305.658 27.4933 305.658 27.92C305.658 28.4 305.632 28.7333 305.578 28.92C305.338 29.72 304.952 30.4133 304.418 31C303.672 31.7467 302.552 32.32 301.058 32.72C299.832 33.0133 298.165 33.2 296.058 33.28H295.098L295.018 33.52C294.752 34.9867 294.618 35.6933 294.618 35.64C294.485 36.6 294.472 37.4533 294.578 38.2C294.872 39.6133 295.658 40.3867 296.938 40.52C297.045 40.5467 297.165 40.56 297.298 40.56C298.685 40.56 300.018 40.1733 301.298 39.4C301.938 39.0267 302.592 38.5067 303.258 37.84C303.738 37.36 304.072 37.1467 304.258 37.2L304.818 37.76C305.192 38.1867 305.338 38.4933 305.258 38.68C305.125 38.92 304.672 39.4 303.898 40.12C302.618 41.1067 301.125 41.7867 299.418 42.16C298.752 42.32 297.965 42.4 297.058 42.4C296.232 42.4 295.538 42.3067 294.978 42.12C294.178 41.8267 293.458 41.3733 292.818 40.76C292.338 40.2533 291.965 39.7067 291.698 39.12C291.192 38.1333 290.898 36.96 290.818 35.6C290.738 32.88 291.525 30.48 293.178 28.4C293.685 27.76 294.245 27.2133 294.858 26.76C296.458 25.4533 298.258 24.6533 300.258 24.36ZM301.578 26.28C300.458 26.0667 299.352 26.3333 298.258 27.08C297.298 27.6933 296.552 28.68 296.018 30.04C295.725 30.76 295.578 31.2 295.578 31.36C295.578 31.4667 296.538 31.44 298.458 31.28C298.645 31.28 298.805 31.2667 298.938 31.24C300.698 31.0533 301.912 30.56 302.578 29.76C302.872 29.3867 303.058 28.9467 303.138 28.44C303.272 27.48 302.925 26.8133 302.098 26.44C301.938 26.36 301.765 26.3067 301.578 26.28Z"
                />
            </motion.svg>
        </div>
    );
};

export default Loader;
