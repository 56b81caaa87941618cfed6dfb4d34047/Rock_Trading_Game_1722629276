/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722629278", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
                <!-- Radial gradient -->
                <!-- Rock-themed background -->
                <div id="rock-background" class="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900"></div>
                <div id="rock-pile" class="absolute inset-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="w-full h-full opacity-30">
                        <path d="M0 1000 L50 900 L150 950 L250 850 L350 900 L450 800 L550 850 L650 750 L750 800 L850 700 L950 750 L1000 650 L1000 1000 Z" fill="#4B0082"/>
                        <path d="M0 1000 L100 950 L200 1000 L300 900 L400 950 L500 850 L600 900 L700 800 L800 850 L900 750 L1000 800 L1000 1000 Z" fill="#483D8B"/>
                        <path d="M0 1000 L75 925 L175 975 L275 875 L375 925 L475 825 L575 875 L675 775 L775 825 L875 725 L975 775 L1000 725 L1000 1000 Z" fill="#6A5ACD"/>
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-violet-200 pb-3" :class="contentSubtitleStyle">Trade, Collect, and Conquer the Rock Market</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-white pb-4" :class="contentCtaTitleStyle"> Rock On, Trade On!</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-violet-100" :class="contentBodyStyle">Enter the wild world of rock trading, where geodes become gold and pebbles are precious!</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-white" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-gray-900",
                radialGradientSecondaryStyle: "bg-gray-700",
                stopColorPrimaryStyle: "#111827",
                stopColorSecondaryStyle: "#374151",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-gray-300 to-gray-100",
                contentCtaTitleStyle: "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200",
                contentBodyStyle: "text-gray-300",
                contentCtaButtonPrimaryStyle:"text-gray-900",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300",
                contentCtaButtonHoverStyle: "hover:bg-yellow-400",
                contentCtaArrowStyle: "text-gray-800"
            };
        },
    });
                    