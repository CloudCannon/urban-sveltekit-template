let listeners = [];

function onLiveEditorLoad(CloudCannon) {
	CloudCannon.enableEvents();
}

export async function onCloudCannonChanges(callback) {
	if (!window.CloudCannon) {
		document.addEventListener('cloudcannon:load', function (e) {
			onLiveEditorLoad(e.detail.CloudCannon);
		});
	} else {
		onLiveEditorLoad(window.CloudCannon);
	}

	const listener = async (e) => {
		const { CloudCannon } = e.detail;
		const latestValue = await CloudCannon.value();
		callback(latestValue);
	};
	document.addEventListener('cloudcannon:update', listener);
	listeners.push(listener);
}

export async function stopCloudCannonChanges() {
	for (let i = 0; i < listeners.length; i++) {
		const listener = listeners[i];
		document.removeEventListener('cloudcannon:update', listener);
	}
	listeners = [];
}

