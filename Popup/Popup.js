var hiddenElements = {}

chrome.storage.local.get(null, (data) => {
	Object.keys(data).forEach(key => {
		if (key === "hypi-custom-shortcut") {
			document.getElementById(key).value = data[key]
		} else if (key === "hypi-enable-styles") {
			setStylesEnabled(data[key])
			document.getElementById(key).checked = data[key]
		} else if (key === "hiddenElements") {
			hiddenElements = JSON.parse(data[key])
			Object.keys(hiddenElements).forEach((hiddenElemKey) => {
				const hiddenElem = hiddenElements[hiddenElemKey]
				document.getElementById(hiddenElem.id).checked = hiddenElem.value
			})
		} else {
			document.getElementById(key).checked = data[key]
		}
	})
});

const setStylesEnabled = (isEnabled = false) => {
	document.querySelectorAll("#hypi-advanced input:not(#hypi-enable-styles)").forEach(elem => elem.disabled = !isEnabled);
}

document.getElementById("hypi-custom-shortcut").addEventListener("input", (e) => {
	if (e.target.value.length > 1) {
		e.target.value = e.target.value.slice(-1);
	}
});

document.querySelectorAll(".hypi-input").forEach(input => {
	input.addEventListener("change", async (e) => {
		const id = e.target.id;
		let value
		if (e.target.type === "checkbox") {
			value = e.target.checked;
		} else {
			value = (e.target.value || "p")
		}
		
		var hideTargetElement = e.target.dataset.hideTargetElement

		if (hideTargetElement !== undefined) {
			hiddenElements[hideTargetElement] = { id, value }
			chrome.storage.local.set({ hiddenElements: JSON.stringify(hiddenElements) });
		} else {
			chrome.storage.local.set({ [id]: value });
		}

		if (id === "hypi-enable-styles") {
			setStylesEnabled(value)
		}

		updateAllTabs()
	})
});

async function updateAllTabs() {
	const tabs = await chrome.tabs.query({ url: "*://*.youtube.com/*" });

	for (const tab of tabs) {
		if (!tab.active && (tab.discarded || tab.status !== "complete")) continue;
		
		chrome.tabs.sendMessage(tab.id, { data: await chrome.storage.local.get(null) });
	}
}

var tabs = document.querySelectorAll('.hypi-tab')
var tabContents = document.querySelectorAll('.hypi-tab-content')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('hypi-active'));
		tabContents.forEach(c => c.classList.remove('hypi-active'));

		tab.classList.add('hypi-active');
		document.getElementById(tab.dataset.tab).classList.add('hypi-active');
	});
});

