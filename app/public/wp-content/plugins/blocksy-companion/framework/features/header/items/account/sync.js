import ctEvents from 'ct-events'
import {
	updateAndSaveEl,
	handleBackgroundOptionFor,
	assembleSelector,
	typographyOption,
	mutateSelector,
	getRootSelectorFor,
	responsiveClassesFor,
} from 'blocksy-customizer-sync'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	(variableDescriptors) => {
		variableDescriptors['account'] = ({ itemId }) => {
			return {
				accountHeaderIconSize: {
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'el-suffix',
							to_add: '[data-state="out"]',
						})
					),
					variable: 'theme-icon-size',
					responsive: true,
					unit: 'px',
				},

				account_loggedin_icon_size: {
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'el-suffix',
							to_add: '[data-state="in"]',
						})
					),
					variable: 'theme-icon-size',
					responsive: true,
					unit: 'px',
				},

				accountHeaderAvatarSize: {
					selector: assembleSelector(getRootSelectorFor({ itemId })),
					variable: 'avatar-size',
					responsive: true,
					unit: 'px',
				},

				...handleBackgroundOptionFor({
					id: 'accountHeaderFormBackground',
					selector: assembleSelector(
						mutateSelector({
							selector: [getRootSelectorFor({ itemId })[0]],
							operation: 'suffix',
							to_add: '#account-modal .ct-account-modal',
						})
					),
				}),

				...handleBackgroundOptionFor({
					id: 'accountHeaderBackground',
					selector: assembleSelector(
						mutateSelector({
							selector: [getRootSelectorFor({ itemId })[0]],
							operation: 'suffix',
							to_add: '#account-modal',
						})
					),
				}),

				account_form_shadow: {
					selector: assembleSelector(
						mutateSelector({
							selector: [getRootSelectorFor({ itemId })[0]],
							operation: 'suffix',
							to_add: '#account-modal .ct-account-modal',
						})
					),
					type: 'box-shadow',
					variable: 'theme-box-shadow',
					// responsive: true,
				},

				account_modal_font_color: [
					{
						selector: '#account-modal .ct-account-modal',
						variable: 'theme-text-color',
						type: 'color:default',
					},

					{
						selector: '#account-modal .ct-account-modal',
						variable: 'theme-link-hover-color',
						type: 'color:hover',
					},
				],

				account_modal_form_text_color: [
					{
						selector: '#account-modal form',
						variable: 'theme-form-text-initial-color',
						type: 'color:default',
					},

					{
						selector: '#account-modal form',
						variable: 'theme-form-text-focus-color',
						type: 'color:focus',
					},
				],

				account_modal_form_border_color: [
					{
						selector: '#account-modal form',
						variable: 'theme-form-field-border-initial-color',
						type: 'color:default',
					},

					{
						selector: '#account-modal form',
						variable: 'theme-form-field-border-focus-color',
						type: 'color:focus',
					},
				],

				account_modal_form_background_color: [
					{
						selector: '#account-modal form',
						variable: 'theme-form-field-background-initial-color',
						type: 'color:default',
					},

					{
						selector: '#account-modal form',
						variable: 'theme-form-field-background-focus-color',
						type: 'color:focus',
					},
				],

				account_close_button_color: [
					{
						selector: '#account-modal .ct-toggle-close',
						variable: 'theme-icon-color',
						type: 'color:default',
					},

					{
						selector: '#account-modal .ct-toggle-close:hover',
						variable: 'theme-icon-color',
						type: 'color:hover',
					},
				],

				account_close_button_border_color: [
					{
						selector:
							'#account-modal .ct-toggle-close[data-type="type-2"]',
						variable: 'toggle-button-border-color',
						type: 'color:default',
					},

					{
						selector:
							'#account-modal .ct-toggle-close[data-type="type-2"]:hover',
						variable: 'toggle-button-border-color',
						type: 'color:hover',
					},
				],

				account_close_button_shape_color: [
					{
						selector:
							'#account-modal .ct-toggle-close[data-type="type-3"]',
						variable: 'toggle-button-background',
						type: 'color:default',
					},

					{
						selector:
							'#account-modal .ct-toggle-close[data-type="type-3"]:hover',
						variable: 'toggle-button-background',
						type: 'color:hover',
					},
				],

				accountHeaderMargin: {
					selector: assembleSelector(getRootSelectorFor({ itemId })),
					type: 'spacing',
					variable: 'margin',
					responsive: true,
					important: true,
				},

				...typographyOption({
					id: 'account_label_font',
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-label',
						})
					),
				}),

				// default state
				accountHeaderColor: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-account-item',
							})
						),
						variable: 'theme-link-initial-color',
						type: 'color:default',
						responsive: true,
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-account-item',
							})
						),
						variable: 'theme-link-hover-color',
						type: 'color:hover',
						responsive: true,
					},
				],

				header_account_icon_color: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-account-item',
							})
						),
						variable: 'theme-icon-color',
						type: 'color:default',
						responsive: true,
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-account-item',
							})
						),
						variable: 'theme-icon-hover-color',
						type: 'color:hover',
						responsive: true,
					},
				],

				// transparent state
				transparentAccountHeaderColor: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-transparent-row="yes"]',
							})
						),

						variable: 'theme-link-initial-color',
						type: 'color:default',
						responsive: true,
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-transparent-row="yes"]',
							})
						),

						variable: 'theme-link-hover-color',
						type: 'color:hover',
						responsive: true,
					},
				],

				transparent_header_account_icon_color: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-transparent-row="yes"]',
							})
						),
						variable: 'theme-icon-color',
						type: 'color:default',
						responsive: true,
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-transparent-row="yes"]',
							})
						),
						variable: 'theme-icon-hover-color',
						type: 'color:hover',
						responsive: true,
					},
				],

				// sticky state
				stickyAccountHeaderColor: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-sticky*="yes"]',
							})
						),
						variable: 'theme-link-initial-color',
						type: 'color:default',
						responsive: true,
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-sticky*="yes"]',
							})
						),
						variable: 'theme-link-hover-color',
						type: 'color:hover',
						responsive: true,
					},
				],

				sticky_header_account_icon_color: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-sticky*="yes"]',
							})
						),
						variable: 'theme-icon-color',
						type: 'color:default',
						responsive: true,
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: mutateSelector({
									selector: getRootSelectorFor({ itemId }),
									operation: 'suffix',
									to_add: '.ct-account-item',
								}),
								operation: 'between',
								to_add: '[data-sticky*="yes"]',
							})
						),
						variable: 'theme-icon-hover-color',
						type: 'color:hover',
						responsive: true,
					},
				],

				// interation type dropdown
				account_dropdown_top_offset: {
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-header-account-dropdown',
						})
					),
					variable: 'dropdown-top-offset',
					unit: 'px',
				},

				sticky_state_account_dropdown_top_offset: {
					selector: assembleSelector(
						mutateSelector({
							selector: mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							}),
							operation: 'between',
							to_add: '[data-sticky*="yes"]',
						})
					),
					variable: 'sticky-state-dropdown-top-offset',
					unit: 'px',
				},
				
				...typographyOption({
					id: 'header_account_dropdown_font',
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-header-account-dropdown',
						})
					),
				}),

				header_account_dropdown_font_color: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'theme-text-color',
						type: 'color:default',
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'theme-link-initial-color',
						type: 'color:link_initial',
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'theme-link-hover-color',
						type: 'color:link_hover',
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'theme-link-active-color',
						type: 'color:link_active',
					},
				],

				header_account_dropdown_color: [
					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'dropdown-background-color',
						type: 'color:default',
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'dropdown-items-background-hover-color',
						type: 'color:hover',
					},

					{
						selector: assembleSelector(
							mutateSelector({
								selector: getRootSelectorFor({ itemId }),
								operation: 'suffix',
								to_add: '.ct-header-account-dropdown',
							})
						),
						variable: 'dropdown-items-background-active-color',
						type: 'color:active',
					},
				],

				header_account_dropdown_divider: {
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-header-account-dropdown',
						})
					),
					variable: 'theme-border',
					type: 'border',
				},

				header_account_dropdown_shadow: {
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-header-account-dropdown',
						})
					),
					type: 'box-shadow',
					variable: 'theme-box-shadow',
					responsive: true,
				},

				header_account_dropdown_radius: {
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-header-account-dropdown',
						})
					),
					type: 'spacing',
					variable: 'theme-border-radius',
					emptyValue: 2,
					responsive: true,
				},
			}
		}
	}
)

ctEvents.on('ct:header:sync:item:account', ({ optionId, optionValue }) => {
	const selector = '[data-id="account"]'

	if (optionId === 'dropdown_items') {
		let accountContainer = document.querySelector(selector)

		updateAndSaveEl(selector, (el) => {
			if (!el.querySelector('.ct-header-account-dropdown')) {
				return
			}

			const elements = el.querySelectorAll(
				'.ct-header-account-dropdown > *:not([id*="menu-item-"])'
			)

			const nonMenuLayers = optionValue.filter(
				({ enabled, id }) => !!enabled && id !== 'menu'
			)

			nonMenuLayers.map((layer, index) => {
				if (!accountContainer) {
					return
				}

				const maybeLayer = elements[index]

				if (!maybeLayer) {
					return
				}

				const linkContainer = maybeLayer.querySelector('a')

				if (layer.id === 'user_info') {
					const additionalFieldsContainer =
						maybeLayer.querySelector('small')

					if (additionalFieldsContainer) {
						const { email, name, role } =
							additionalFieldsContainer.dataset

						additionalFieldsContainer.innerText =
							layer.account_user_info_additional_fields
								.replace('{user_email}', email)
								.replace('{user_name}', name)
								.replace('{user_role}', role)
					}
				}

				if (layer.id !== 'user_info' && linkContainer && layer.label) {
					linkContainer.innerHTML = layer.label
				}
			})
		})
	}

	if (optionId === 'header_account_visibility') {
		updateAndSaveEl(selector, (el) =>
			responsiveClassesFor({ ...optionValue, desktop: true }, el)
		)
	}

	if (
		optionId === 'loggedin_account_label_visibility' ||
		optionId === 'loggedout_account_label_visibility'
	) {
		updateAndSaveEl(selector, (el) => {
			;[...el.querySelectorAll('.ct-label')].map((label) => {
				responsiveClassesFor(optionValue, label)
			})
		})
	}

	if (
		optionId === 'loggedin_icon_visibility' ||
		optionId === 'loggedout_icon_visibility'
	) {
		updateAndSaveEl(selector, (el) => {
			;[...el.querySelectorAll('.ct-icon')].map((icon) => {
				responsiveClassesFor(optionValue, icon)
			})
		})
	}

	if (optionId === 'loggedin_label') {
		updateAndSaveEl(selector, (el) => {
			;[...el.querySelectorAll('.ct-label')].map((label) => {
				label.innerHTML = optionValue
			})
		})

		updateAndSaveEl(
			selector,
			(el) => {
				if (!optionValue.desktop) {
					optionValue = {
						desktop: optionValue,
						mobile: optionValue,
					}
				}

				;[...el.querySelectorAll('.ct-label')].map((label) => {
					label.innerHTML = optionValue.desktop
				})
			},
			{ onlyView: 'desktop' }
		)

		updateAndSaveEl(
			selector,
			(el) => {
				if (!optionValue.desktop) {
					optionValue = {
						desktop: optionValue,
						mobile: optionValue,
					}
				}

				;[...el.querySelectorAll('.ct-label')].map((label) => {
					label.innerHTML = optionValue.mobile
				})
			},
			{ onlyView: 'mobile' }
		)
	}

	if (optionId === 'login_label') {
		updateAndSaveEl(selector, (el) => {
			;[...el.querySelectorAll('.ct-label')].map((label) => {
				label.innerHTML = optionValue
			})
		})
	}

	if (
		optionId === 'loggedout_label_position' ||
		optionId === 'loggedin_label_position'
	) {
		updateAndSaveEl(
			'.ct-account-item',
			(el) => {
				if (!optionValue.desktop) {
					optionValue = {
						desktop: optionValue,
						mobile: optionValue,
					}
				}

				el.dataset.label = optionValue.desktop
			},
			{ onlyView: 'desktop' }
		)

		updateAndSaveEl(
			'.ct-account-item',
			(el) => {
				if (!optionValue.desktop) {
					optionValue = {
						desktop: optionValue,
						mobile: optionValue,
					}
				}

				el.dataset.label = optionValue.mobile
			},
			{ onlyView: 'mobile' }
		)
	}

	if (optionId === 'account_close_button_type') {
		let offcanvasModalClose = document.querySelector(
			'#account-modal .ct-toggle-close'
		)

		setTimeout(() => {
			offcanvasModalClose.classList.add('ct-disable-transitions')

			requestAnimationFrame(() => {
				if (offcanvasModalClose) {
					offcanvasModalClose.dataset.type = optionValue
				}

				setTimeout(() => {
					offcanvasModalClose.classList.remove(
						'ct-disable-transitions'
					)
				})
			})
		}, 300)
	}

	if (optionId === 'dropdown_items_type') {
		let accountContainer = document.querySelector(selector)

		if (accountContainer) {
			const listContainer =
				accountContainer.querySelector('ul[data-dropdown]')

			if (listContainer) {
				if (optionValue === 'boxed') {
					listContainer.dataset.dropdown = 'type-1:boxed'
				} else {
					listContainer.dataset.dropdown = 'type-1'
				}
			}
		}
	}
})
