   // Initialize Swiper Slider
        var swiper = new Swiper('.swiper-container', {
            slidesPerView:4,
            spaceBetween:10,
            //loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            }
        });

        const currentURL = window.location.href;

        function copyLink() {
            navigator.clipboard.writeText(currentURL).then(() => {
                alert("Link copied to clipboard! You can paste it in your Instagram story or bio.");
            });
        }
        
// Open Share Popup
function openSharePopup() {
    document.getElementById("sharePopup").style.display = "flex";
}

// Close Share Popup
function closeSharePopup() {
    document.getElementById("sharePopup").style.display = "none";
}

        function shareOnX() {
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}`, "_blank");
        }

        function shareOnFacebook() {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`, "_blank");
        }

        function shareOnWhatsApp() {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(currentURL)}`, "_blank");
        }

        function shareOnLinkedIn() {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentURL)}`, "_blank");
        }

        function shareOnTelegram() {
            window.open(`https://t.me/share/url?url=${encodeURIComponent(currentURL)}`, "_blank");
        }

        function shareOnReddit() {
            window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(currentURL)}`, "_blank");
        }

        function shareByEmail() {
            window.location.href = `mailto:?subject=Check this out!&body=${encodeURIComponent(currentURL)}`;
        }

        function shareOnInstagram() {
            copyLink();  
            window.open(`https://www.instagram.com/`, "_blank");
        }

    function generateQRCode() {
        document.getElementById("qr-container").style.display = "block";
        document.getElementById("qrcode").innerHTML = ""; 

        new QRCode(document.getElementById("qrcode"), {
            text: window.location.href,  // The URL to encode
            width: 150,  // Width of QR code
            height: 150,  // Height of QR code
            
            colorDark: "#FFFFFF",  // Change the QR code color (foreground)
            colorLight: "#000000",  // Change the background color
            correctLevel: QRCode.CorrectLevel.H  // High error correction level
        });
    }

        
        function universalShare() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: "Check this out!",
                    url: currentURL
                }).catch((error) => console.log("Error sharing:", error));
            } else {
                alert("Sharing not supported on this device. Try copying the link instead.");
            }
        }
        
        
        
        
               function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: "Check out Anurag's Links",
            text: "Here are my social media and project links!",
            url: window.location.href
        }).then(() => {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
    openSharePopup()
        alert("Your browser does not support sharing.");
    }
}
