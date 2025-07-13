import type { ClassValue } from 'clsx';
import { cn } from '$lib/utils';

export interface InViewObserverOpts {
	inViewClasses: ClassValue;
	outOfViewClasses: ClassValue;
}

export class InViewObserver {
	public inView: boolean = $state(false);
	private readonly observer: IntersectionObserver;
	private readonly outOfViewClasses: ClassValue;
	private readonly inViewClasses: ClassValue;

	constructor(opts?: InViewObserverOpts) {
		const {
			inViewClasses = "opacity-100",
			outOfViewClasses = "opacity-0",
		} = opts || {};
		this.inViewClasses = inViewClasses;
		this.outOfViewClasses = outOfViewClasses;

		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry, entry.isIntersecting)
				this.inView = entry.isIntersecting;
			});
		});
	}

	public observe(el: HTMLElement) {
		this.observer.observe(el);
	}

	public classes(): ClassValue {
		return cn(this.inView ? this.inViewClasses : this.outOfViewClasses, `transition-all duration-1000`)
	}
}
