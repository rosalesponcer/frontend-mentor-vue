const GALLEY_ITEMS = [
	{
		url: (mobile) => {
			return mobile
				? new URL(
						'../../assets/images/mobile/image-transform.jpg',
						import.meta.url
				  )
				: new URL(
						'../../assets/images/desktop/image-transform.jpg',
						import.meta.url
				  );
		},
		title: 'Transform your brand',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem voluptatum blanditiis consectetur voluptatibus iusto distinctio ipsa cum a culpa adipisci?',
		button: true,
	},
	{
		url: (mobile) => {
			return mobile
				? new URL(
						'../../assets/images/mobile/image-stand-out.jpg',
						import.meta.url
				  )
				: new URL(
						'../../assets/images/desktop/image-stand-out.jpg',
						import.meta.url
				  );
		},
		title: 'Stand out to the rigth audience',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem voluptatum blanditiis consectetur voluptatibus iusto distinctio ipsa cum a culpa adipisci?',
		button: true,
	},
	{
		url: (mobile) => {
			return mobile
				? new URL(
						'../../assets/images/mobile/image-graphic-design.jpg',
						import.meta.url
				  )
				: new URL(
						'../../assets/images/desktop/image-graphic-design.jpg',
						import.meta.url
				  );
		},
		title: 'Graphic Desing',
		text: 'Great desing makes you memorable. We deliver artwork that underscores your brand message and captures potential clients´ attention',
		float: true,
	},
	{
		url: (mobile) => {
			return mobile
				? new URL(
						'../../assets/images/mobile/image-photography.jpg',
						import.meta.url
				  )
				: new URL(
						'../../assets/images/desktop/image-photography.jpg',
						import.meta.url
				  );
		},
		title: 'Photography',
		text: 'Increase your credibility by getting the most stuning, high-quality photos that improve your business image',
		float: true,
	},
];

export { GALLEY_ITEMS };
