import { useRef, useCallback } from 'react';

type UseOnPauseOptions = {
	delay?: number; // tiempo en ms (default: 3000)
	onPause: () => void;
};

export function useOnPause({ delay = 3000, onPause }: UseOnPauseOptions) {
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleStart = useCallback(() => {
		if (timeoutRef.current) return;
		timeoutRef.current = setTimeout(() => {
			onPause();
			timeoutRef.current = null; // limpiar después de ejecutar
		}, delay);
	}, [delay, onPause]);

	const handleCancel = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	}, []);

	return {
		startPause: handleStart,
		cancelPause: handleCancel,
	};
}
