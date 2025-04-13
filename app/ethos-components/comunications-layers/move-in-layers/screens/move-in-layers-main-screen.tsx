import { FC, useEffect } from 'react'

export const MoveInLayersMainScreen: FC<any> = () => {

	useEffect(() => {
		window.onzoom = function (e) {
			// zoom event
		};

		(function () {
			var oldresize = window.onresize;
			window.onresize = function (e) {
				var event = window.event || e;
				if (typeof (oldresize) === 'function' && !oldresize.call(window, event)) {
					console.log("resize event", event);
					return false;
				}
				if (typeof (window.onzoom) === 'function') {
					console.log("resize event", event);

					return window.onzoom.call(window, event);
				}
			}
		})();
	}, [])



	return (
		<div>move-in-layers-main-screen</div>
	)
}
