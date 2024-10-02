document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let activeTab = tabs[0];
        console.log(activeTab);

        let tabinfoname = document.getElementById('tab-info-name');
        let tabinfourl = document.getElementById('tab-info-url');
        
        // Check if elements exist
        if (tabinfourl && tabinfoname) {
            tabinfourl.innerText = activeTab.url;
            tabinfoname.innerText = activeTab.title;
        } else {
            console.error('Elements not found in the DOM');
        }
    });
    chrome.tabs.query({  currentWindow: true }, function(tabs) {
        let activeTab=tabs;
        let insights=document.getElementsByClassName('insights')[0];
        insights.innerText=`Total tabs:${tabs.length}`;
        let div=document.getElementById("current-window-container");
        let text="";
        activeTab.map((tab,index)=>{
            text+=`<h2> Tab-${index+1} </h2> <span><p style="font-weight:bold;">Tab Name-</p>${tab.title}</span>  <span><p style="font-weight:bolder;">Tab Url-</p>${tab.url}</span> <br>`;
        })
        div.innerHTML=text;
    });
});
