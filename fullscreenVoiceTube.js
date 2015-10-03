// ==UserScript==
// @name        Fullscreen VoiceTube
// @namespace   fullscreen.voicetube
// @description Make VoiceTube Video FullScreen !
// @include     https://tw.voicetube.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

jQuery.noConflict()

if (location.pathname.search(/videos/) >= 0) {
    var VideoPATH = location.pathname
    var VideoID = VideoPATH.substring(VideoPATH.indexOf("s/") + 2, VideoPATH.indexOf("s/") + 7)
    var EmbedURL = 'https://tw.voicetube.com/embed/' + VideoID
    jQuery('#embed-section').append('<a href="javascript:;" id="fullscreenBtn">&nbsp;全螢幕播放</a>')
    jQuery('#fullscreenBtn').click(function() {
        window.open(EmbedURL, '_blank')
    })
} else if (location.pathname.search(/embed/) >= 0) {
    var browserHeight = jQuery(window).height()
    var YTContainerHeight = browserHeight * 0.85
    jQuery('#youtube').css("height", YTContainerHeight + 'px')
    jQuery('#caption_block').css({
        "font-size": "200%",
        "line-height": "150%"
    })
};
