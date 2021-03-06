lineemotes.getStylesheet = function () {
    var stylesheet = '';
    
    stylesheet += `
#bda-qem-line-container {
    width: 346px;
    height: 327px;
    border-radius: 0 0 5px 5px;
    font-weight: 800;
    color: #98aab6;
    background-color: #353535;
}`;
    
    // styling the scroller so it looks consistent across the tabs
    stylesheet += `
.bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar, 
.bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar-track, 
.bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar-track-piece {
    background-color: #303030 !important;
    border-color: #303030 !important;
}
 
.bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar-thumb {
    border-color: #202020 !important;
    background-color: #202020 !important;
}`;

    // preventing overflow
    stylesheet += `
#bda-qem-line-container .scroller-wrap {
    height: 100%;
}`;
    
    // padding the inner container
    stylesheet += `
#bda-qem-line-container .emote-menu-inner {
    padding: 5px 15px 48px 15px;
}`;
    
    // header for a sticker pack
    stylesheet += `
#bda-qem-line-container .line-pack-header {
    display: flex;
    color: #98aab6;
    height: 12px;
    font-size: 12px;
    padding: 12px 0 12px 0;
    text-transform: uppercase;
}`;
    
    // sizing stickers up from default 30x30
    stylesheet += `
#bda-qem-line-container .emote-container {
    width: 71px;
    height: 71px;
}`;
    
    // preview stylesheet
    stylesheet += `
#bda-qem-line-container .preview-container .preview-wrapper {
    position: absolute; 
    width: 256px;
    height: 358px; 
    background: #353535; 
    background-size: contain; 
    border-top-left-radius: 3px; 
    border-bottom-left-radius: 3px; 
    box-shadow: -10px 0px 80px 0px rgba(0, 0, 0, 0.2); 
    transform: translateX(-256px) translateY(-358px) translateZ(0px); 
    transition: all .15s ease-in-out .15s; 
}`;
    
    // categories stylesheet
    stylesheet += `
#bda-qem-line-container .categories-container {
    position: absolute;
    width: 331px;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
    margin-top: -44px;
    background-color: #353535;
    border-top: 1px solid rgba(0,0,0,.1);   
}

#bda-qem-line-container .categories-container .categories-wrapper {
    clear: right;
    overflow: hidden;
    white-space: nowrap;
}
    
#bda-qem-line-container .categories-container .categories-wrapper .item:first-of-type {
    margin-left: 15px;
    margin-right: 0px;
}
    
#bda-qem-line-container .categories-container .categories-wrapper .item:nth-child(2) {
    margin-left: 0px;
}


#bda-qem-line-container .categories-container .categories-wrapper .item:hover { 
    filter: grayscale(0%); 
}

#bda-qem-line-container .categories-container .categories-wrapper .item {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    width: 28px;
    height: 44px;
    margin-right: 4px;
    margin-left: 2.5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 32px 32px;
    border-bottom: 3px solid transparent;
    filter: grayscale(100%);
    transition: filter .1s ease-in-out;
}`;


    stylesheet += `
#bda-qem-line-container .visible {
    opacity: 1 !important;
}
    
#bda-qem-line-container .line-pack .line-editbar:hover {
    opacity: 1;
}
    
#bda-qem-line-container .line-pack .line-editbar {
    float: right;
    display: flex;
    padding-top: 7px;
    opacity: 0;
    transition: opacity .1s ease-in-out;
}

#bda-qem-line-container .line-pack .line-editbar .item {
    display: inline-block;
    width: 22px;
    height: 22px;
    opacity: 0.5;
    transition: opacity .1s ease-in-out .05s;
}
    
#bda-qem-line-container .line-pack .line-editbar .item:hover {
    opacity: 1;
}

#bda-qem-line-container .line-pack .line-editbar .icon-edit {
    display: inherit;
    width: inherit;
    height: inherit;
    background-image: url(/assets/99d227db4a23596956637210e624d79b.png);
    background-position: -528px -374px;
    background-size: 924px 682px;
    filter: grayscale(100%);
    transform: rotate(90deg) scale(0.8);
}



#bda-qem-line-container .icon-plus {
    width: 22px;
    height: 22px;
    background-image: url(/assets/99d227db4a23596956637210e624d79b.png);
    background-position: -220px -484px;
    background-size: 924px 682px;
    filter: grayscale(100%);
    margin: 11px 0 0 0;
}

#bda-qem-line-container .icon-plus-cross {
    display: inherit;
    margin: 0;
    transform: rotate(45deg);
    filter: invert() grayscale(100%);
}

#bda-qem-line-container .icon-minus {
    width: 22px;
    height: 22px;
    background-image: url(/assets/99d227db4a23596956637210e624d79b.png);
    background-position: -242px -484px;
    background-size: 924px 682px;
    filter: grayscale(100%);
    margin: 11px 0 0 0;
}
        

#bda-qem-line-container input:focus {
    box-shadow: 0px 2px 0px 0px;
    outline: none;
}

#bda-qem-line-container input {
    color: #98aab6;
    background-color: #353535;
    border: none;
    margin: 0;
    height: 12px;
    padding: 0px;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
}
    
#bda-qem-line-container .line-pack input {
    width: 100%;
}

#bda-qem-line-container .add-form {
    position: absolute;
    bottom: 48px;
    width: 301px;
    transition: opacity .1s ease-in-out .05s;
    background: #353535;
    padding: 15px;
    border-top: 1px solid rgba(0, 0, 0, .1);
    text-transform: uppercase;
}

#bda-qem-line-container .add-form input::-webkit-input-placeholder {
    color: rgba(152, 170, 182, 0.5);
}
#bda-qem-line-container .add-form input {
    border-bottom: solid 1px;
    margin: 0;
}
#bda-qem-line-container .add-form input:focus {
    border: none;
}
    
#line-add-id {
}
    
#line-add-length {
}
    
#line-add-title {
}

#bda-qem-line-container .categories-container .icon-triangle {
    width: 22px;
    height: 22px;
    background-image: url(/assets/99d227db4a23596956637210e624d79b.png);
    background-position: -858px -484px;
    background-size: 924px 682px;
    filter: hue-rotate(130deg);
    float: right;
    margin-right: 5px;
}

#bda-qem-line-container .confirm {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(35, 35, 35, 0.8);
    transition: opacity .1s ease-in-out .05s;
    z-index: 10;
}
    
#bda-qem-line-container .box {
    width: 100%; 
    color: #98aab6; 
    text-align: center;
    transform: translateY(250%);
}
    
#bda-qem-line-container .confirm .yes, #bda-qem-line-container .confirm .no {
    padding: 10px;
    text-transform: uppercase;
    cursor: pointer;
    color: rgba(152, 170, 182, 0.8);
    transition: color .1s ease-in-out .05s;
}

#bda-qem-line-container .confirm .yes:hover {
    color: #ad0000
}

#bda-qem-line-container .confirm .no:hover {
    color: rgb(152, 170, 182);
} 
    
#bda-qem-line-container .line-add-button.invalid:hover {
    background-color: #ad0000 !important; 
}
#bda-qem-line-container .line-add-button.valid:hover {
    background-color: #15ad00 !important; 
}
`;
    return `<style>${stylesheet}</style>`;
};