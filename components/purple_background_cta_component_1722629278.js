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
                <div id="rock-background" class="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 opacity-80"></div>
                <div id="rock-texture" class="absolute inset-0 bg-repeat opacity-20" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=');"></div>
                <!-- Blurred shape -->
                <!-- Rock formation -->
                <div id="rock-formation" class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3" :class="[transparentTextStyle, contentSubtitleStyle]">Trade, Collect, and Conquer the Rock Market</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4" :class="[transparentTextStyle, contentCtaTitleStyle]"> Rock On, Trade On!</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8" :class="[contentBodyStyle]">Enter the wild world of rock trading, where geodes become gold and pebbles are precious!</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Get Started <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-gray-800",
                radialGradientSecondaryStyle: "bg-gray-600",
                stopColorPrimaryStyle: "#1F2937",
                stopColorSecondaryStyle: "#4B5563",
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
                    