const opts = {
	schema: {
		response: {
			200: {
				type: "object",
				properties: {
					listingDetail: {
						type: "object",
						properties: {
							marketing_data: {
								type: "string"
							},
							breadcrumbs: {
								type: "array",
								items: {
									type: "object",
									properties: {
										link: {
											type: "string"
										},
										text: {
											type: "string"
										}
									},
									required: ["link", "text"]
								}
							},
							no_car_found_data: {
								type: "string"
							},
							meta_data: {
								type: "object",
								properties: {
									title: {
										type: "string"
									},
									description: {
										type: "string"
									},
									keywords: {
										type: "string"
									},
									og_title: {
										type: "string"
									},
									og_description: {
										type: "string"
									},
									canonical_url: {
										type: "string"
									},
									filter_url: {
										type: "string"
									},
									robots: {
										type: "string"
									},
									og_image: {
										type: "string"
									}
								},
								required: ["title", "description", "keywords", "og_title", "og_description", "canonical_url", "filter_url", "robots", "og_image"]
							},
							applied_filters_with_display_name: {
								type: "object",
								properties: {
									category: {
										type: "array",
										items: {
											type: "object",
											properties: {
												key: {
													type: "string"
												},
												display_name: {
													type: "string"
												}
											},
											required: ["key", "display_name"]
										}
									},
									product_type: {
										type: "array",
										items: {
											type: "object",
											properties: {
												key: {
													type: "string"
												},
												display_name: {
													type: "string"
												}
											},
											required: ["key", "display_name"]
										}
									},
									city: {
										type: "array",
										items: {
											type: "object",
											properties: {
												key: {
													type: "string"
												},
												display_name: {
													type: "string"
												}
											},
											required: ["key", "display_name"]
										}
									}
								},
								required: ["category", "product_type", "city"]
							},
							schema_data: {
								type: "object",
								properties: {
									breadcrumb_data: {
										type: "object",
										properties: {
											context: {
												type: "string"
											},
											type: {
												type: "string"
											},
											itemListElement: {
												type: "array",
												items: {
													type: "object",
													properties: {
														type: {
															type: "string"
														},
														item: {
															type: "object",
															properties: {
																id: {
																	type: "string"
																},
																name: {
																	type: "string"
																}
															},
															required: ["id", "name"]
														},
														position: {
															type: "integer"
														}
													},
													required: ["type", "item", "position"]
												}
											}
										},
										required: ["context", "type", "itemListElement"]
									}
								},
								required: ["breadcrumb_data"]
							},
							footer_table_heading: {
								type: "string"
							},
							metaObject: {
								type: "object",
								properties: {
									topHeading: {
										type: "string"
									},
									topContent: {
										type: "string"
									},
									faqListing: {
										type: "array",
										items: {
											type: "object",
											properties: {
												question: {
													type: "string"
												},
												answer: {
													type: "string"
												}
											},
											required: ["question", "answer"]
										}
									}
								},
								required: ["topHeading", "topContent", "faqListing"]
							},
							noCarData: {
								type: "object",
								properties: {
									noCarsFoundArray: {
										type: "array",
										items: {
											type: "object",
											properties: {
												labelKey: {
													type: "string"
												},
												labelValue: {
													type: "string"
												}
											},
											required: ["labelKey", "labelValue"]
										}
									},
									noCarsFoundText: {
										type: "string"
									}
								},
								required: ["noCarsFoundArray", "noCarsFoundText"]
							},
							applied_filters: {
								type: "object",
								properties: {
									city: {
										type: "array",
										items: {
											type: "string"
										}
									},
									product_type: {
										type: "array",
										items: {
											type: "string"
										}
									},
									category: {
										type: "array",
										items: {
											type: "string"
										}
									}
								},
								required: ["city", "product_type", "category"]
							}
						}
					},
					constantData: {
						type: "object",
						properties: {
							filter_constant: {
								type: "object",
								properties: {
									emi: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											options: { type: "object", properties: { key: { type: "string" }, value: { type: "string" } } },
											applied_values: { type: "object", properties: { min: { type: "string" }, max: { type: "string" } } }
										}
									},
									price: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											options: { type: "object", properties: { key: { type: "string" }, value: { type: "string" } } },
											applied_values: { type: "object", properties: { min: { type: "string" }, max: { type: "string" } } }
										}
									},
									min_price: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											is_required: { type: "boolean" },
											is_display_required: { type: "boolean" }
										}
									},
									max_price: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											is_required: { type: "boolean" },
											is_display_required: { type: "boolean" }
										}
									},
									min_year: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											options: { type: "object", properties: { key: { type: "string" }, applied: { type: "boolean" }, value: { type: "integer" } } }
										}
									},
									max_mileage: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											options: { type: "object", properties: { key: { type: "string" }, applied: { type: "boolean" }, value: { type: "integer" } } }
										}
									},
									fuel_type: {
										type: "object",
										properties: {
											display_name: { type: "string" },
											field_type: { type: "string" },
											options: { type: "object", properties: { key: { type: "string" }, applied: { type: "boolean" }, value: { type: "integer" } } }
										}
									},
									no_of_owners: { type: "object" },
									transmission: { type: "object" },
									body_type: { type: "object" },
									color: { type: "object" },
									hub: { type: "object" },
									rto: { type: "object" },
									lifestyle_category: { type: "object" },
									availability: { type: "object" },
									attribute: { type: "object" },
									car_category: { type: "object" },
									seats: { type: "object" },
									make_model: { type: "object" }
								}
							}
						}
					}
				}
			}
		}
	}
};

const json = {
	listingDetail: {
		marketing_data: "Used cars in Delhi NCR",
		breadcrumbs: [
			{
				link: "/",
				text: "Home"
			},
			{
				link: "/used-cars-in-delhi-ncr/s/",
				text: "Used cars In Delhi Ncr"
			}
		],
		no_car_found_data: "Oops. No cars found for your search in Delhi NCR",
		meta_data: {
			title: "Second Hand Cars in Delhi NCR - Used Cars in Delhi NCR - Spinny",
			description:
				"Spinny offers used cars in Delhi NCR with hassle-free paperwork & free home test drive. The highest quality certified second hand cars in Delhi NCR at the best prices.",
			keywords:
				"used cars in Delhi NCR, buy used cars in Delhi NCR, used cars Delhi NCR, buy used cars online in Delhi NCR, buy pre-owned cars in Delhi NCR, buy second hand cars in Delhi NCR, used cars under 3 lakh",
			og_title: "<p>Second Hand Cars in Delhi NCR - Used Cars in Delhi NCR - Spinny</p>",
			og_description:
				"Spinny offers used cars in Delhi NCR with hassle-free paperwork & free home test drive. The highest quality certified second hand cars in Delhi NCR at the best prices.",
			canonical_url: "/used-cars-in-delhi-ncr/s/",
			filter_url: "/used-cars-in-delhi-ncr/s/",
			robots: "INDEX,FOLLOW",
			og_image: "https://spinny-images.s3.ap-south-1.amazonaws.com/static-asset/hubs-assets/delhi-ncr.jpg"
		},
		noCarData: {
			noCarsFoundArray: [
				{
					labelKey: "City",
					labelValue: "I'm looking for cars in  Delhi Ncr"
				}
			],
			noCarsFoundText: "City: I'm looking for cars in  Delhi Ncr"
		},
		applied_filters: {
			city: ["delhi-ncr"],
			product_type: ["cars"],
			category: ["used"]
		},
		applied_filters_with_display_name: {
			category: [
				{
					key: "used",
					display_name: "Used"
				}
			],
			product_type: [
				{
					key: "cars",
					display_name: "Cars"
				}
			],
			city: [
				{
					key: "delhi-ncr",
					display_name: "Delhi NCR"
				}
			]
		},
		schema_data: {
			breadcrumb_data: {
				"@context": "http://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						item: {
							"@id": "https://www.spinny.com/",
							name: "Home"
						},
						position: 1
					},
					{
						"@type": "ListItem",
						item: {
							"@id": "https://www.spinny.com/used-cars-in-delhi-ncr/s/",
							name: "Used cars In Delhi Ncr"
						},
						position: 2
					}
				]
			}
		},
		footer_table_heading: "Used cars price in Delhi NCR",
		metaObject: {
			topHeading: "Used cars in Delhi NCR",
			topContent:
				'<p>With over $$inventory_count certified used cars in Delhi NCR, Spinny offers the widest range of quality certified second hand cars, starting from $$starting_price. Every Spinny Assured certified pre owned car is evaluated with a 200-point quality evaluation that checks the condition of the old car. Popular second hand cars on Spinny include second hand Celerio, used Creta, and <a target="_blank" href="https://www.spinny.com/used-city-cars-in-delhi-ncr/s/">pre owned Honda City</a>, among the range of <a target="_blank" href="https://www.spinny.com/used-hatchback-cars-in-delhi-ncr/s/">used hatchback</a>, second hand sedan, <a target="_blank" href="https://www.spinny.com/used-suv-cars-in-delhi-ncr/s/">used SUV</a>, and second hand MUV cars as well as <a target="_blank" href="https://www.spinny.com/used-automatic-cars-in-delhi-ncr/s/">used automatic cars</a> and second hand manual cars available on the platform.  </p><p>Affordable used cars under 3 lakh like used Alto 800 and second hand Kwid are popular for their compact size. More spacious <a target="_blank" href="https://www.spinny.com/used-cars-under-5-lakh-rs-in-delhi-ncr/s/"><u>second hand cars under 5 lakh</u></a> include used Celerio and <a target="_blank" href="https://www.spinny.com/used-grand-i10-cars-in-delhi-ncr/s/"><u>second hand Grand i10</u></a>, making them great family cars on a budget. Premium <a target="_blank" href="https://www.spinny.com/used-cars-under-10-lakh-rs-in-delhi-ncr/s/"><u>used cars under 10 lakh</u></a> like second hand Ciaz, <a target="_blank" href="https://www.spinny.com/used-ertiga-cars-in-delhi-ncr/s/"><u>used Ertiga</u></a>, used Tata Nexon and <a target="_blank" href="https://www.spinny.com/used-creta-cars-in-delhi-ncr/s/"><u>second hand Creta</u></a> are a great upgrade to consider. All Spinny Assured pre-owned cars in Delhi NCR are available for a free home test drive, free home delivery, 5-day money back guarantee, 1 year warranty, free RC transfer, and attractive used car loan options.</p>',
			faqListing: [
				{
					question: "<h3>Q. What is the starting price of used cars in Delhi NCR on Spinny?</h3>",
					answer:
						"<p>Used cars in Delhi NCR are available at prices starting as low as Rs. 1.46 Lakh on Spinny, featuring used hatchbacks, second hand sedans, used SUVs, and second hand MUVs at the best prices.</p>"
				},
				{
					question: "<h3>Q. How many used cars are available in Delhi Ncr?</h3>",
					answer:
						'<p>With over 1092 certified used cars in Delhi Ncr, Spinny offers a range of <a target="_blank" rel="" href="https://www.spinny.com/used-automatic-cars-in-delhi-ncr/s/">used automatic cars</a> and second hand manual cars as well as <a target="_blank" rel="" href="https://www.spinny.com/used-diesel-cars-in-delhi-ncr/s/">used diesel cars</a>, second hand petrol cars, and <a target="_blank" rel="" href="https://www.spinny.com/used-cng-cars-in-delhi-ncr/s/">used CNG cars</a>.</p>'
				},
				{
					question: "<h3>Q. What body types are available for used cars in Delhi Ncr?</h3>",
					answer:
						'<p>Used cars in Delhi Ncr are available in all body types, including second hand hatchbacks, used sedans, second hand SUVs and used MUVs.<br><br>Popular cars in different body types include:</p><ul><li><p><a target="_blank" href="https://www.spinny.com/used-hatchback-cars-in-delhi-ncr/s/">Hatchback Cars</a>: Used WagonR, second hand i20, &amp; used Tata Tiago</p></li><li><p><a target="_blank" href="https://www.spinny.com/used-sedan-cars-in-delhi-ncr/s/">Sedan Cars</a>: Second hand Verna, used Vento, second hand Maruti Ciaz &amp; used Honda City</p></li><li><p><a target="_blank" href="https://www.spinny.com/used-suv-cars-in-delhi-ncr/s/">SUV Cars</a>: Second hand WR-V, used Creta, second hand Tata Nexon, used Venue &amp; second hand Vitara Brezza</p></li><li><p><a target="_blank" href="https://www.spinny.com/used-muv-cars-in-delhi-ncr/s/">MUV Cars</a>: Used Triber, second hand Ertiga &amp; used Marazzo</p></li></ul>'
				},
				{
					question: "<h3>Q. What are the fuel options available for used cars in Delhi Ncr?</h3>",
					answer:
						"<p>Spinny offers a wide range of used petrol cars as well as second hand diesel cars in Delhi Ncr. Second hand petrol cars start at Rs. 2.1 lakh, while used diesel cars start at Rs. 2.6 lakh and used CNG cars start at Rs. 3 lakh.</p>"
				},
				{
					question: "<h3>Q. Where can I take test drive of used cars in Delhi Ncr?</h3>",
					answer:
						"<p>You can book a home test drive for all Spinny Assured used cars. You can also test drive at any of the Spinny Car Hub used car showrooms in Delhi Ncr, located in Ghaziabad, Dwarka, Noida, Netaji Subhash Place, and Gurgaon. The timings for booking a test drive of a Spinny Assured car are between 10 am to 8 pm, on all days.</p>"
				},
				{
					question: "<h3>Q. Is it worth buying a second hand cars from Spinny?</h3>",
					answer:
						"<p>Spinny makes buying a used car convenient, transparent, and seamless, with services that are customer-focused. Buying a second hand car in Delhi Ncr from Spinny comes with a free 1-year warranty, 5-day money back guarantee, secure RC transfer, and 200-point quality evaluation, ensuring a confident used car ownership experience after purchase.</p>"
				},
				{
					question: "<h3>Q. Is an old car expensive to maintain in Delhi Ncr?</h3>",
					answer:
						"<p>With easy availability of spare parts, reasonable service costs, and accessible service centres in Delhi Ncr, used cars are affordable cars to maintain.</p>"
				}
			],
			footerContent: [
				{
					title: "<h2>Fully Certified Used Cars in Delhi NCR</h2>",
					description:
						"<p>Spinny ensures only the best used cars in Delhi NCR are available to choose from with a 200-point inspection. Certified experts carry out the inspection for every Spinny Assured used car by evaluating the car's exterior and interior condition, in addition to the car's performance. Only pre-owned cars that pass our inspection are qualified as Spinny Assured used cars. Spinny offers the widest range of thoroughly inspected and certified second hand cars in Delhi NCR at the best prices.</p>"
				},
				{
					title: "<h2>Most reliable pre owned cars in Delhi NCR</h2>",
					description:
						'<p>Spinny Assured offers a wide range of over 1092 popular and reliable used cars from the best-selling car brands in Delhi NCR. Popular pre-owned cars from reliable brands like <a target="_blank" href="https://www.spinny.com/used-maruti-suzuki-cars-in-delhi-ncr/s/">used Maruti Suzuki cars</a><a target="_blank" href="/used-maruti-suzuki-cars-in-delhi-ncr/s/"> </a>, second hand Honda, second hand Kia, and <a target="_blank" href="https://www.spinny.com/used-hyundai-cars-in-delhi-ncr/s/">used Hyundai</a> are available on Spinny. Pre owned cars in Delhi NCR include <a target="_blank" href="/used-hatchback-cars-in-delhi-ncr/s/">used hatchback</a>, second hand sedan, used SUV, and second hand MUV body types, providing the best choice of old cars in the city. Used hatchback cars in Delhi NCR, like used Maruti Suzuki Alto 800, <a target="_blank" href="https://www.spinny.com/used-wagon-r-cars-in-delhi-ncr/s/">second hand Maruti Wagon R</a>, and pre-owned Hyundai Grand i10, are popular cars to own due to their compact dimensions and fuel efficient engines. Second hand sedans in Delhi NCR, like used Hyundai Verna and second hand Honda City, are desired for their premium interiors and engaging driving experience. Pre-owned SUV cars Delhi NCR, like used Creta, second hand Tata Nexon, and <a target="_blank" href="https://www.spinny.com/used-vitara-brezza-cars-in-delhi-ncr/s/">used Vitara Brezza</a>, are popular for their higher ground clearance and premium features.</p>'
				},
				{
					title: "<h2>Why buy old cars in Delhi NCR from Spinny</h2>",
					description:
						"<p>When buying an old car, Spinny helps remove the uncertainty and doubts surrounding used cars. With Spinny Assured, you get to choose from a wide range of reliable and high quality used cars in Delhi NCR. Every second hand car is certified using a 200-point quality evaluation and ensures only the best second hand cars in Delhi NCR are available to choose from. The full service history of all Spinny Assured used cars are available to review before buying the car you want. Spinny handles all paperwork and ownership transfers for your Spinny Assured car on your behalf for maximum convenience. Attractive used car finance options with low interest rates are also available for every Spinny used car in Delhi NCR.</p>"
				},
				{
					title: "<h3>Free Home Test Drive of Old Cars</h3>",
					description:
						"<p>All Spinny Assured used cars are available for a free home test drive, giving you the freedom to test and old car on Spinny at a location of your preference. Spinny Assured second hand cars are also available for free test drives at the Spinny Car Hub used car showrooms in Delhi Ncr, giving you more option to drive on your visit.</p>"
				},
				{
					title: "<h3>Secure second hand car ownership in Delhi NCR</h3>",
					description:
						"<p>We understand that your preference might change after you purchase your Spinny Assured car. To help you, every Spinny Assured used car comes with a 5-day money back guarantee. Under this guarantee, you can return your Spinny Assured car for a no-questions-asked 100% refund of your purchase from Spinny in Delhi NCR.</p>"
				}
			],
			marketingText:
				'<p>With over 1092 certified used cars in Delhi NCR, Spinny offers the widest range of quality certified second hand cars, starting from Rs. 1.46 Lakh. Every Spinny Assured certified pre owned car is evaluated with a 200-point quality evaluation that checks the condition of the old car. Popular second hand cars on Spinny include second hand Celerio, used Creta, and <a target="_blank" href="https://www.spinny.com/used-city-cars-in-delhi-ncr/s/">pre owned Honda City</a>, among the range of <a target="_blank" href="https://www.spinny.com/used-hatchback-cars-in-delhi-ncr/s/">used hatchback</a>, second hand sedan, <a target="_blank" href="https://www.spinny.com/used-suv-cars-in-delhi-ncr/s/">used SUV</a>, and second hand MUV cars as well as <a target="_blank" href="https://www.spinny.com/used-automatic-cars-in-delhi-ncr/s/">used automatic cars</a> and second hand manual cars available on the platform.  </p><p>Affordable used cars under 3 lakh like used Alto 800 and second hand Kwid are popular for their compact size. More spacious <a target="_blank" href="https://www.spinny.com/used-cars-under-5-lakh-rs-in-delhi-ncr/s/"><u>second hand cars under 5 lakh</u></a> include used Celerio and <a target="_blank" href="https://www.spinny.com/used-grand-i10-cars-in-delhi-ncr/s/"><u>second hand Grand i10</u></a>, making them great family cars on a budget. Premium <a target="_blank" href="https://www.spinny.com/used-cars-under-10-lakh-rs-in-delhi-ncr/s/"><u>used cars under 10 lakh</u></a> like second hand Ciaz, <a target="_blank" href="https://www.spinny.com/used-ertiga-cars-in-delhi-ncr/s/"><u>used Ertiga</u></a>, used Tata Nexon and <a target="_blank" href="https://www.spinny.com/used-creta-cars-in-delhi-ncr/s/"><u>second hand Creta</u></a> are a great upgrade to consider. All Spinny Assured pre-owned cars in Delhi NCR are available for a free home test drive, free home delivery, 5-day money back guarantee, 1 year warranty, free RC transfer, and attractive used car loan options.</p>',
			priceTableData: [
				{
					tableType: "price",
					linkText: "Second Hand Maruti-Suzuki Baleno(69)",
					linkValue: "₹ 4.88L - 7.68L",
					count: 69,
					link: "/used-baleno-cars-in-delhi-ncr/s/",
					fromPrice: 488000,
					toPrice: 768000
				},
				{
					tableType: "price",
					linkText: "Second Hand Maruti-Suzuki Swift(66)",
					linkValue: "₹ 1.94L - 7.45L",
					count: 66,
					link: "/used-swift-cars-in-delhi-ncr/s/",
					fromPrice: 194000,
					toPrice: 745000
				},
				{
					tableType: "price",
					linkText: "Second Hand Hyundai Grand-I10(65)",
					linkValue: "₹ 3.17L - 5.78L",
					count: 65,
					link: "/used-grand-i10-cars-in-delhi-ncr/s/",
					fromPrice: 317000,
					toPrice: 578000
				},
				{
					tableType: "price",
					linkText: "Second Hand Hyundai I20(52)",
					linkValue: "₹ 4.10L - 7.18L",
					count: 52,
					link: "/used-i20-cars-in-delhi-ncr/s/",
					fromPrice: 410000,
					toPrice: 717890
				},
				{
					tableType: "price",
					linkText: "Second Hand Maruti-Suzuki Wagon-R(51)",
					linkValue: "₹ 1.54L - 6.65L",
					count: 51,
					link: "/used-wagon-r-cars-in-delhi-ncr/s/",
					fromPrice: 154000,
					toPrice: 665121
				}
			],
			priceTableHeaders: ["Model", "Second Hand Car Price"],
			inventoryCount: 1092,
			carResearchData: null,
			priceTableHeading: ""
		},
		isLuxuryFilterApplied: false
	},
	constantData: {
		filter_constant: {
			emi: {
				display_name: "EMI Range",
				field_type: "range",
				applied_values: {
					min: "",
					max: ""
				},
				options: [
					{
						key: 2000,
						value: 2000
					},
					{
						key: 5000,
						value: 5000
					},
					{
						key: 10000,
						value: 10000
					},
					{
						key: 15000,
						value: 15000
					},
					{
						key: 20000,
						value: 20000
					},
					{
						key: 25000,
						value: 25000
					},
					{
						key: 30000,
						value: 30000
					},
					{
						key: 40000,
						value: 40000
					},
					{
						key: 50000,
						value: 50000
					},
					{
						key: 60000,
						value: 60000
					},
					{
						key: 70000,
						value: 70000
					},
					{
						key: 80000,
						value: 80000
					},
					{
						key: 90000,
						value: 90000
					},
					{
						key: 100000,
						value: 100000
					},
					{
						key: 110000,
						value: 110000
					},
					{
						key: 120000,
						value: 120000
					}
				]
			},
			price: {
				display_name: "Price",
				field_type: "range",
				applied_values: {
					min: "",
					max: ""
				},
				options: [
					{
						key: 50000,
						value: 50000
					},
					{
						key: 100000,
						value: 100000
					},
					{
						key: 150000,
						value: 150000
					},
					{
						key: 200000,
						value: 200000
					},
					{
						key: 250000,
						value: 250000
					},
					{
						key: 300000,
						value: 300000
					},
					{
						key: 350000,
						value: 350000
					},
					{
						key: 400000,
						value: 400000
					},
					{
						key: 500000,
						value: 500000
					},
					{
						key: 600000,
						value: 600000
					},
					{
						key: 700000,
						value: 700000
					},
					{
						key: 800000,
						value: 800000
					},
					{
						key: 1000000,
						value: 1000000
					},
					{
						key: 1500000,
						value: 1500000
					},
					{
						key: 3000000,
						value: 3000000
					},
					{
						key: 4000000,
						value: 4000000
					},
					{
						key: 5000000,
						value: 5000000
					},
					{
						key: 7000000,
						value: 7000000
					}
				]
			},
			min_price: {
				display_name: "Min Price",
				field_type: "radio",
				is_required: false,
				is_display_required: true
			},
			max_price: {
				display_name: "Max Price",
				field_type: "radio",
				is_required: false,
				is_display_required: true
			},
			min_year: {
				display_name: "Year",
				field_type: "radio",
				options: [
					{
						key: "2020 & above",
						applied: false,
						value: 2020
					},
					{
						key: "2018 & above",
						applied: false,
						value: 2018
					},
					{
						key: "2016 & above",
						applied: false,
						value: 2016
					},
					{
						key: "2014 & above",
						applied: false,
						value: 2014
					},
					{
						key: "2012 & above",
						applied: false,
						value: 2012
					},
					{
						key: "2010 & above",
						applied: false,
						value: 2010
					},
					{
						key: "2008 & above",
						applied: false,
						value: 2008
					}
				]
			},
			max_mileage: {
				display_name: "Kms Driven",
				field_type: "radio",
				options: [
					{
						key: "10,000 kms or less",
						applied: false,
						value: 10000
					},
					{
						key: "30,000 kms or less",
						applied: false,
						value: 30000
					},
					{
						key: "50,000 kms or less",
						applied: false,
						value: 50000
					},
					{
						key: "75,000 kms or less",
						applied: false,
						value: 75000
					},
					{
						key: "1,00,000 kms or less",
						applied: false,
						value: 100000
					},
					{
						key: "1,25,000 kms or less",
						applied: false,
						value: 125000
					},
					{
						key: "1,50,000 kms or less",
						applied: false,
						value: 150000
					}
				]
			},
			fuel_type: {
				display_name: "Fuel Type",
				field_type: "multiple",
				options: [
					{
						key: "Petrol",
						applied: false,
						value: "petrol"
					},
					{
						key: "Diesel",
						applied: false,
						value: "diesel"
					},
					{
						key: "CNG",
						applied: false,
						value: "cng"
					}
				]
			},
			no_of_owners: {
				display_name: "Owner",
				field_type: "radio",
				options: [
					{
						key: "1st owner",
						applied: false,
						value: 1,
						hide: true
					},
					{
						key: "2nd owner",
						applied: false,
						value: 2,
						hide: true
					},
					{
						key: "2+ owner",
						applied: false,
						value: "2plus",
						hide: true
					},
					{
						key: "0thowner",
						applied: false,
						value: 0,
						hide: true
					},
					{
						key: "Upto 1st owner",
						applied: false,
						value: "upto-1",
						hide: false
					},
					{
						key: "Upto 2nd owner",
						applied: false,
						value: "upto-2",
						hide: false
					},
					{
						key: "Upto 3rd owner",
						applied: false,
						value: "upto-3",
						hide: false
					}
				]
			},
			transmission: {
				display_name: "Transmission",
				field_type: "multiple",
				options: [
					{
						key: "Automatic",
						applied: false,
						value: "automatic",
						sub_type: [
							{
								key: "AMT",
								applied: false,
								value: "amt",
								description: "Automated Manual Transmission"
							},
							{
								key: "CVT",
								applied: false,
								value: "cvt",
								description: "Continuously Variable Transmission"
							},
							{
								key: "TC",
								applied: false,
								value: "tc",
								description: "Torque Converter"
							},
							{
								key: "DCT",
								applied: false,
								value: "dct",
								description: "Dual-Clutch Transmission"
							}
						]
					},
					{
						key: "Manual",
						applied: false,
						value: "manual",
						sub_type: [
							{
								key: "iMT",
								applied: false,
								value: "imt",
								description: "Intelligent Manual Transmission"
							},
							{
								key: "Regular",
								applied: false,
								value: "regular",
								description: "manual"
							}
						]
					}
				]
			},
			body_type: {
				display_name: "Body Type",
				field_type: "multiple",
				options: [
					{
						key: "Hatchback",
						applied: false,
						value: "hatchback"
					},
					{
						key: "Sedan",
						applied: false,
						value: "sedan"
					},
					{
						key: "SUV",
						applied: false,
						value: "suv"
					},
					{
						key: "MUV",
						applied: false,
						value: "muv"
					}
				]
			},
			color: {
				display_name: "Color",
				field_type: "multiple",
				options: [
					{
						key: "White",
						applied: false,
						value: "white"
					},
					{
						key: "Silver",
						applied: false,
						value: "silver"
					},
					{
						key: "Grey",
						applied: false,
						value: "grey"
					},
					{
						key: "Black",
						applied: false,
						value: "black"
					},
					{
						key: "Violet",
						applied: false,
						value: "violet"
					},
					{
						key: "Purple",
						applied: false,
						value: "purple"
					},
					{
						key: "Blue",
						applied: false,
						value: "blue"
					},
					{
						key: "Green",
						applied: false,
						value: "green"
					},
					{
						key: "Beige",
						applied: false,
						value: "beige"
					},
					{
						key: "Yellow",
						applied: false,
						value: "yellow"
					},
					{
						key: "Golden",
						applied: false,
						value: "golden"
					},
					{
						key: "Bronze",
						applied: false,
						value: "bronze"
					},
					{
						key: "Brown",
						applied: false,
						value: "brown"
					},
					{
						key: "Orange",
						applied: false,
						value: "orange"
					},
					{
						key: "Wine",
						applied: false,
						value: "wine"
					},
					{
						key: "Maroon",
						applied: false,
						value: "maroon"
					},
					{
						key: "Red",
						applied: false,
						value: "red"
					}
				]
			},
			hub: {
				display_name: "Spinny Hubs",
				field_type: "multiple",
				options: [
					{
						id: 65,
						name: "noida-gaur-city-hub",
						value: "noida-gaur-city-hub",
						display_name: "Gaur City Mall, Noida",
						city: {
							name: "noida",
							display_name: "Noida"
						}
					},
					{
						id: 8,
						name: "delhi-dwarka-sector-21-taj-vivanta-hub",
						value: "delhi-dwarka-sector-21-taj-vivanta-hub",
						display_name: "Taj Vivanta, Dwarka, Delhi",
						city: {
							name: "delhi",
							display_name: "Delhi"
						}
					},
					{
						id: 74,
						name: "gurgaon-trillium-avenue-hub",
						value: "gurgaon-trillium-avenue-hub",
						display_name: "Trillium Avenue, Sector 29, Gurgaon",
						city: {
							name: "gurgaon",
							display_name: "Gurgaon"
						}
					},
					{
						id: 88,
						name: "spinny-car-hub-indirapuram-habitat-centre-ghaziabad",
						value: "spinny-car-hub-indirapuram-habitat-centre-ghaziabad",
						display_name: "Indirapuram Habitat Centre, Ghaziabad",
						city: {
							name: "ghaziabad",
							display_name: "Ghaziabad"
						}
					},
					{
						id: 83,
						name: "gurgaon-sohna-hub",
						value: "gurgaon-sohna-hub",
						display_name: "Universal Trade Tower, Sohna Road, Gurgaon",
						city: {
							name: "gurgaon",
							display_name: "Gurgaon"
						}
					},
					{
						id: 91,
						name: "spinny-car-hub-rcube-monad-mall-rajouri",
						value: "spinny-car-hub-rcube-monad-mall-rajouri",
						display_name: "Rcube Monad Mall, Rajouri Garden, Delhi",
						city: {
							name: "delhi",
							display_name: "Delhi"
						}
					},
					{
						id: 99,
						name: "spinny-car-hubmetro-walk-mall-rohini",
						value: "spinny-car-hubmetro-walk-mall-rohini",
						display_name: "Spinny Car Hub, Rohini, Delhi",
						city: {
							name: "delhi",
							display_name: "Delhi"
						}
					},
					{
						id: 81,
						name: "gnb-hub-ghaziabad",
						value: "gnb-hub-ghaziabad",
						display_name: "GNB Mall, Ghaziabad",
						city: {
							name: "ghaziabad",
							display_name: "Ghaziabad"
						}
					},
					{
						id: 93,
						name: "max-hub-trillium-avenue",
						value: "max-hub-trillium-avenue",
						display_name: "Max, Trillium Avenue, Sector 29, Gurgaon",
						city: {
							name: "gurgaon",
							display_name: "Gurgaon"
						}
					}
				]
			},
			rto: {
				display_name: "RTO",
				field_type: "multiple",
				options: [
					{
						key: "HR",
						value: "hr",
						city: ["gurgaon", "noida", "delhi"]
					},
					{
						key: "UP",
						value: "up",
						city: ["gurgaon", "ghaziabad", "noida"]
					},
					{
						key: "DL",
						value: "dl",
						city: ["gurgaon", "ghaziabad", "delhi", "noida"]
					}
				]
			},
			lifestyle_category: {
				display_name: "Lifestyle Category",
				field_type: "multiple",
				options: [
					{
						key: "Value",
						applied: false,
						value: "value"
					},
					{
						key: "Commuter",
						applied: false,
						value: "commuter"
					},
					{
						key: "Feature packed",
						applied: false,
						value: "feature-packed"
					},
					{
						key: "Family",
						applied: false,
						value: "family"
					},
					{
						key: "Adventure",
						applied: false,
						value: "adventure"
					},
					{
						key: "Luxury",
						applied: false,
						value: "luxury"
					}
				]
			},
			availability: {
				display_name: "Availability",
				field_type: "multiple",
				options: [
					{
						key: "In stock",
						applied: false,
						value: "available"
					},
					{
						key: "Booked",
						applied: false,
						value: "booked"
					},
					{
						key: "Upcoming",
						applied: false,
						value: "in-refurb"
					}
				]
			},
			attribute: {
				display_name: "Attribute",
				field_type: "multiple",
				options: [
					{
						key: "Sunroof",
						applied: false,
						value: "sunroof"
					},
					{
						key: "Keyless start",
						applied: false,
						value: "keyless-start"
					},
					{
						key: "ABS",
						applied: false,
						value: "anti-lock-braking-system-abs-1"
					},
					{
						key: "Airbags",
						applied: false,
						value: "airbags"
					},
					{
						key: "Rear camera",
						applied: false,
						value: "rear-camera"
					},
					{
						key: "Rear parking sensor",
						applied: false,
						value: "parking-sensors"
					},
					{
						key: "Power windows",
						applied: false,
						value: "power-windows"
					},
					{
						key: "Power steering",
						applied: false,
						value: "power-steering"
					}
				]
			},
			car_category: {
				display_name: "Category",
				field_type: "multiple",
				options: [
					{
						key: "Spinny Assured",
						applied: false,
						value: "assured"
					},
					{
						key: "Spinny Budget",
						applied: false,
						value: "budget"
					},
					{
						key: "Spinny Max",
						applied: false,
						value: "luxury"
					}
				]
			},
			seats: {
				display_name: "Seats",
				field_type: "multiple",
				options: [
					{
						key: "5 seater",
						applied: false,
						value: 5
					},
					{
						key: "7 seater",
						applied: false,
						value: 7
					},
					{
						key: "4 seater",
						applied: false,
						value: 4
					},
					{
						key: "8 seater",
						applied: false,
						value: 8
					},
					{
						key: "6 seater",
						applied: false,
						value: 6
					}
				]
			},
			make_model: {
				display_name: "Brands & Models",
				field_type: "multiple",
				is_required: false,
				allLoaded: true,
				options: {
					make_value: {
						audi: {
							id: 11,
							name: "audi",
							display_name: "Audi",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/audi/logos/197x71.png",
							models: [
								{
									id: 375,
									name: "a3",
									display_name: "A3",
									usable: true,
									tags: ["Luxury"],
									count: 5
								},
								{
									id: 177,
									name: "a4",
									display_name: "A4",
									usable: true,
									tags: ["Luxury"],
									count: 3
								},
								{
									id: 178,
									name: "a6",
									display_name: "A6",
									usable: true,
									tags: ["Luxury"],
									count: 2
								},
								{
									id: 183,
									name: "q5",
									display_name: "Q5",
									usable: true,
									tags: ["Luxury"],
									count: 1
								},
								{
									id: 409,
									name: "a3-cabriolet",
									display_name: "A3 Cabriolet",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 518,
									name: "a6-matrix",
									display_name: "A6 Matrix",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 526,
									name: "q2",
									display_name: "Q2",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 182,
									name: "q3",
									display_name: "Q3",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 184,
									name: "q7",
									display_name: "Q7",
									usable: true,
									tags: ["LUXURY_AUCTION", "Luxury"],
									count: 0
								},
								{
									id: 185,
									name: "r8",
									display_name: "R8",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 186,
									name: "rs5",
									display_name: "RS5",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 411,
									name: "rs6",
									display_name: "RS6",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 412,
									name: "rs7-sportback",
									display_name: "RS7 Sportback",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 410,
									name: "s5-sportback",
									display_name: "S5 Sportback",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 192,
									name: "tt",
									display_name: "TT",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 11,
							expand: false,
							is_popular: true
						},
						bmw: {
							id: 12,
							name: "bmw",
							display_name: "BMW",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/bmw/logos/197x71.png",
							models: [
								{
									id: 202,
									name: "x1",
									display_name: "X1",
									usable: true,
									tags: ["Luxury"],
									count: 22
								},
								{
									id: 194,
									name: "3-series",
									display_name: "3 Series",
									usable: true,
									tags: ["Luxury"],
									count: 8
								},
								{
									id: 195,
									name: "5-series",
									display_name: "5 Series",
									usable: true,
									tags: ["Luxury"],
									count: 7
								},
								{
									id: 203,
									name: "x3",
									display_name: "X3",
									usable: true,
									tags: ["Luxury"],
									count: 3
								},
								{
									id: 554,
									name: "2-series-gran-coupe",
									display_name: "2 Series Gran Coupe",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 436,
									name: "3-series-gt",
									display_name: "3 Series GT",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 437,
									name: "4-series",
									display_name: "4 Series",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 196,
									name: "5-series-gt",
									display_name: "5 Series GT",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 197,
									name: "6-series",
									display_name: "6 Series",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 198,
									name: "7-series",
									display_name: "7 Series",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 559,
									name: "8-series",
									display_name: "8 Series",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 438,
									name: "i8",
									display_name: "i8",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 199,
									name: "m3",
									display_name: "M3",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 200,
									name: "m5",
									display_name: "M5",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 543,
									name: "x4",
									display_name: "X4",
									usable: true,
									tags: ["LUXURY_AUCTION", "Luxury"],
									count: 0
								},
								{
									id: 204,
									name: "x5",
									display_name: "X5",
									usable: true,
									tags: ["LUXURY_AUCTION", "Luxury"],
									count: 0
								},
								{
									id: 205,
									name: "x6",
									display_name: "X6",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 207,
									name: "z4",
									display_name: "Z4",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 40,
							expand: false,
							is_popular: true
						},
						chevrolet: {
							id: 8,
							name: "chevrolet",
							display_name: "Chevrolet",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/chevrolet/logos/197x71.png",
							models: [
								{
									id: 151,
									name: "spark",
									display_name: "Spark",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 137,
									name: "aveo",
									display_name: "Aveo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 406,
									name: "aveo-u-va",
									display_name: "Aveo U-VA",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 140,
									name: "beat",
									display_name: "Beat",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 142,
									name: "cruze",
									display_name: "Cruze",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 143,
									name: "enjoy",
									display_name: "Enjoy",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 146,
									name: "optra-magnum",
									display_name: "Optra Magnum",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 147,
									name: "optra-srv",
									display_name: "Optra SRV",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 148,
									name: "sail",
									display_name: "Sail",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 404,
									name: "sail-hatchback",
									display_name: "Sail Hatchback",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 407,
									name: "sail-u-va",
									display_name: "Sail U-VA",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 152,
									name: "tavera",
									display_name: "Tavera",
									usable: true,
									tags: ["Discontinued"],
									count: 0
								},
								{
									id: 405,
									name: "trailblazer",
									display_name: "Trailblazer",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 1,
							expand: false,
							is_popular: true
						},
						citroen: {
							id: 64,
							name: "citroen",
							display_name: "Citroen",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/citroen/logos/197x71.png",
							models: [
								{
									id: 576,
									name: "c3",
									display_name: "C3",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 577,
									name: "c5-aircross",
									display_name: "C5 Aircross",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 0,
							expand: false,
							is_popular: false
						},
						datsun: {
							id: 22,
							name: "datsun",
							display_name: "Datsun",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/datsun/logos/197x71.png",
							models: [
								{
									id: 264,
									name: "go",
									display_name: "GO",
									usable: true,
									tags: ["go"],
									count: 7
								},
								{
									id: 403,
									name: "go-plus",
									display_name: "Go Plus",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 7,
							expand: false,
							is_popular: true
						},
						fiat: {
							id: 25,
							name: "fiat",
							display_name: "Fiat",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/fiat/logos/197x71.png",
							models: [
								{
									id: 276,
									name: "500",
									display_name: "500",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 446,
									name: "abarth-595",
									display_name: "Abarth 595",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 277,
									name: "adventure",
									display_name: "Adventure",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 444,
									name: "avventura",
									display_name: "Avventura",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 279,
									name: "grande-punto",
									display_name: "Grande Punto",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 280,
									name: "linea",
									display_name: "Linea",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 442,
									name: "punto-evo",
									display_name: "Punto Evo",
									usable: true,
									tags: ["Assured"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 0,
							expand: false,
							is_popular: false
						},
						ford: {
							id: 7,
							name: "ford",
							display_name: "Ford",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/ford/logos/197x71.png",
							models: [
								{
									id: 126,
									name: "ecosport",
									display_name: "EcoSport",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 27
								},
								{
									id: 127,
									name: "endeavour",
									display_name: "Endeavour",
									usable: true,
									tags: ["Assured"],
									count: 2
								},
								{
									id: 132,
									name: "figo",
									display_name: "Figo",
									usable: true,
									tags: ["Freestyle", "figo"],
									count: 1
								},
								{
									id: 125,
									name: "classic",
									display_name: "Classic",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 128,
									name: "escort",
									display_name: "Escort",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 129,
									name: "fiesta",
									display_name: "Fiesta",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 131,
									name: "fiesta-classic",
									display_name: "Fiesta Classic",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 402,
									name: "figo-aspire",
									display_name: "Figo Aspire",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 493,
									name: "freestyle",
									display_name: "Freestyle",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 133,
									name: "fusion",
									display_name: "Fusion",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 134,
									name: "ikon",
									display_name: "Ikon",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 534,
									name: "mustang",
									display_name: "Mustang",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 30,
							expand: false,
							is_popular: true
						},
						honda: {
							id: 5,
							name: "honda",
							display_name: "Honda",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/honda/logos/197x71.png",
							models: [
								{
									id: 92,
									name: "city",
									display_name: "City",
									usable: true,
									tags: ["Assured"],
									count: 32
								},
								{
									id: 90,
									name: "amaze",
									display_name: "Amaze",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 20
								},
								{
									id: 91,
									name: "brio",
									display_name: "Brio",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 18
								},
								{
									id: 481,
									name: "wr-v",
									display_name: "WR-V",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 10
								},
								{
									id: 100,
									name: "jazz",
									display_name: "Jazz",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 7
								},
								{
									id: 486,
									name: "br-v",
									display_name: "BR-V",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 3
								},
								{
									id: 95,
									name: "civic",
									display_name: "Civic",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 89,
									name: "accord",
									display_name: "Accord",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 386,
									name: "cr-v",
									display_name: "CR-V",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 579,
									name: "elevate",
									display_name: "Elevate",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 101,
									name: "mobilio",
									display_name: "Mobilio",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 93,
							expand: false,
							is_popular: true
						},
						hyundai: {
							id: 2,
							name: "hyundai",
							display_name: "Hyundai",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/hyundai/logos/197x71.png",
							models: [
								{
									id: 38,
									name: "i20",
									display_name: "i20",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 75
								},
								{
									id: 36,
									name: "grand-i10",
									display_name: "Grand i10",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 65
								},
								{
									id: 377,
									name: "creta",
									display_name: "Creta",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 46
								},
								{
									id: 37,
									name: "i10",
									display_name: "i10",
									usable: true,
									tags: ["i10"],
									count: 39
								},
								{
									id: 48,
									name: "verna",
									display_name: "Verna",
									usable: true,
									tags: ["Assured", "Verna"],
									count: 23
								},
								{
									id: 505,
									name: "venue",
									display_name: "Venue",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 18
								},
								{
									id: 492,
									name: "new-santro-11",
									display_name: "New Santro 1.1",
									usable: true,
									tags: ["Santro"],
									count: 8
								},
								{
									id: 32,
									name: "eon",
									display_name: "Eon",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 6
								},
								{
									id: 42,
									name: "santro-xing",
									display_name: "Santro Xing",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 3
								},
								{
									id: 49,
									name: "xcent",
									display_name: "Xcent",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 3
								},
								{
									id: 503,
									name: "grand-i10-nios",
									display_name: "Grand i10 Nios",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 511,
									name: "aura",
									display_name: "Aura",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 30,
									name: "elantra",
									display_name: "Elantra",
									usable: true,
									tags: ["Elantra"],
									count: 1
								},
								{
									id: 47,
									name: "tucson",
									display_name: "Tucson",
									usable: true,
									tags: ["Assured"],
									count: 1
								},
								{
									id: 29,
									name: "accent",
									display_name: "Accent",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 383,
									name: "accent-viva",
									display_name: "Accent Viva",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 533,
									name: "alcazar",
									display_name: "Alcazar",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 574,
									name: "exter",
									display_name: "Exter",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 35,
									name: "getz-prime",
									display_name: "Getz Prime",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 39,
									name: "neo-fluidic-elantra",
									display_name: "Neo Fluidic Elantra",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 40,
									name: "santa-fe",
									display_name: "Santa Fe",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 570,
									name: "venue-nline",
									display_name: "Venue N-Line",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 291,
							expand: false,
							is_popular: true
						},
						isuzu: {
							id: 30,
							name: "isuzu",
							display_name: "Isuzu",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/isuzu/logos/197x71.png",
							models: [
								{
									id: 470,
									name: "mu-7",
									display_name: "MU-7",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 521,
									name: "mu-x",
									display_name: "MU-X",
									usable: true,
									tags: ["Assured"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 0,
							expand: false,
							is_popular: false
						},
						jaguar: {
							id: 31,
							name: "jaguar",
							display_name: "Jaguar",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/jaguar/logos/197x71.png",
							models: [
								{
									id: 299,
									name: "xf",
									display_name: "XF",
									usable: true,
									tags: ["Luxury"],
									count: 1
								},
								{
									id: 552,
									name: "f-pace",
									display_name: "F-Pace",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 450,
									name: "xe",
									display_name: "XE",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 302,
									name: "xk",
									display_name: "XK",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 1,
							expand: false,
							is_popular: true
						},
						jeep: {
							id: 61,
							name: "jeep",
							display_name: "Jeep",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/jeep/logos/197x71.png",
							models: [
								{
									id: 488,
									name: "compass",
									display_name: "Compass",
									usable: true,
									tags: ["Luxury"],
									count: 41
								},
								{
									id: 566,
									name: "meridian",
									display_name: "Meridian",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 519,
									name: "wrangler",
									display_name: "Wrangler",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 41,
							expand: false,
							is_popular: true
						},
						kia: {
							id: 62,
							name: "kia",
							display_name: "Kia",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/kia/logos/197x71.png",
							models: [
								{
									id: 512,
									name: "seltos",
									display_name: "Seltos",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 27
								},
								{
									id: 482,
									name: "sonet",
									display_name: "Sonet",
									usable: true,
									tags: ["Assured"],
									count: 17
								},
								{
									id: 517,
									name: "carnival",
									display_name: "Carnival",
									usable: true,
									tags: ["Assured"],
									count: 1
								},
								{
									id: 561,
									name: "carens",
									display_name: "Carens",
									usable: true,
									tags: ["Assured"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 45,
							expand: false,
							is_popular: true
						},
						"land-rover": {
							id: 33,
							name: "land-rover",
							display_name: "Land Rover",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/land-rover/logos/197x71.png",
							models: [
								{
									id: 448,
									name: "discovery-sport",
									display_name: "Discovery Sport",
									usable: true,
									tags: ["Luxury"],
									count: 5
								},
								{
									id: 449,
									name: "discovery",
									display_name: "Discovery",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 305,
									name: "discovery-3",
									display_name: "Discovery 3",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 306,
									name: "discovery-4",
									display_name: "Discovery 4",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 309,
									name: "range-rover-evoque",
									display_name: "Range Rover Evoque",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 5,
							expand: false,
							is_popular: true
						},
						mahindra: {
							id: 9,
							name: "mahindra",
							display_name: "Mahindra",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/mahindra/logos/197x71.png",
							models: [
								{
									id: 496,
									name: "marazzo",
									display_name: "Marazzo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 7
								},
								{
									id: 498,
									name: "xuv-300",
									display_name: "XUV 300",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 7
								},
								{
									id: 161,
									name: "thar",
									display_name: "Thar",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 5
								},
								{
									id: 166,
									name: "xuv500",
									display_name: "XUV500",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 3
								},
								{
									id: 544,
									name: "xuv700",
									display_name: "XUV700",
									usable: true,
									tags: ["Assured"],
									count: 3
								},
								{
									id: 390,
									name: "tuv300",
									display_name: "TUV300",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 530,
									name: "alturas-g4",
									display_name: "Alturas G4",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 160,
									name: "scorpio",
									display_name: "Scorpio",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 153,
									name: "armada",
									display_name: "Armada",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 154,
									name: "bolero",
									display_name: "Bolero",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 537,
									name: "bolero-neo",
									display_name: "Bolero Neo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 388,
									name: "e2o",
									display_name: "e2o",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 387,
									name: "kuv100",
									display_name: "KUV100",
									usable: true,
									tags: ["KUV"],
									count: 0
								},
								{
									id: 514,
									name: "kuv100-nxt",
									display_name: "KUV100 NXT",
									usable: true,
									tags: ["Compact", "KUV"],
									count: 0
								},
								{
									id: 157,
									name: "marshal",
									display_name: "Marshal",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 391,
									name: "nuvosport",
									display_name: "NuvoSport",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 159,
									name: "quanto",
									display_name: "Quanto",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 393,
									name: "revai",
									display_name: "REVAi",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 565,
									name: "scorpio-classic",
									display_name: "Scorpio Classic",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 392,
									name: "scorpio-getaway",
									display_name: "Scorpio Getaway",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 563,
									name: "scorpio-n",
									display_name: "Scorpio N",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 515,
									name: "tuv-300-plus",
									display_name: "TUV 300 PLUS",
									usable: true,
									tags: ["Compact", "SUV"],
									count: 0
								},
								{
									id: 162,
									name: "verito",
									display_name: "Verito",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 167,
									name: "xylo",
									display_name: "Xylo",
									usable: true,
									tags: ["BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 29,
							expand: false,
							is_popular: true
						},
						"maruti-suzuki": {
							id: 1,
							name: "maruti-suzuki",
							display_name: "Maruti Suzuki",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/maruti-suzuki/logos/197x71.png",
							models: [
								{
									id: 6,
									name: "baleno",
									display_name: "Baleno",
									usable: true,
									tags: ["Assured"],
									count: 69
								},
								{
									id: 19,
									name: "swift",
									display_name: "Swift",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 66
								},
								{
									id: 24,
									name: "wagon-r",
									display_name: "Wagon R",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 54
								},
								{
									id: 15,
									name: "dzire",
									display_name: "Dzire",
									usable: true,
									tags: ["Assured"],
									count: 31
								},
								{
									id: 568,
									name: "brezza",
									display_name: "Brezza",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 18
								},
								{
									id: 8,
									name: "ciaz",
									display_name: "Ciaz",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 15
								},
								{
									id: 380,
									name: "s-cross",
									display_name: "S-Cross",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 10
								},
								{
									id: 7,
									name: "celerio",
									display_name: "Celerio",
									usable: true,
									tags: ["Celerio", "Celerio X"],
									count: 9
								},
								{
									id: 4,
									name: "alto-800",
									display_name: "Alto 800",
									usable: true,
									tags: ["Alto", "Assured", "BCM"],
									count: 7
								},
								{
									id: 381,
									name: "a-star",
									display_name: "A-Star",
									usable: true,
									tags: ["BCM"],
									count: 6
								},
								{
									id: 3,
									name: "alto",
									display_name: "Alto",
									usable: true,
									tags: ["Alto", "Assured", "BCM"],
									count: 6
								},
								{
									id: 9,
									name: "eeco",
									display_name: "Eeco",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 6
								},
								{
									id: 474,
									name: "ignis",
									display_name: "Ignis",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 5
								},
								{
									id: 17,
									name: "ritz",
									display_name: "Ritz",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 5
								},
								{
									id: 10,
									name: "ertiga",
									display_name: "Ertiga",
									usable: true,
									tags: ["Ertiga"],
									count: 4
								},
								{
									id: 508,
									name: "xl6",
									display_name: "XL6",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 495,
									name: "celerio-x",
									display_name: "Celerio X",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 382,
									name: "estilo",
									display_name: "Estilo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 504,
									name: "s-presso",
									display_name: "S-Presso",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 2,
									name: "1000",
									display_name: "1000",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 1,
									name: "800",
									display_name: "800",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 11,
									name: "esteem",
									display_name: "Esteem",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 573,
									name: "fronx",
									display_name: "Fronx",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 12,
									name: "grand-vitara",
									display_name: "Grand Vitara",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 575,
									name: "invicto",
									display_name: "Invicto",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 578,
									name: "jimny",
									display_name: "Jimny",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 506,
									name: "new-ertiga",
									display_name: "New Ertiga",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 16,
									name: "omni",
									display_name: "Omni",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 22,
									name: "sx4",
									display_name: "SX4",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 23,
									name: "versa",
									display_name: "Versa",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 27,
									name: "zen",
									display_name: "Zen",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 316,
							expand: false,
							is_popular: true
						},
						"mercedes-benz": {
							id: 56,
							name: "mercedes-benz",
							display_name: "Mercedes-Benz",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/mercedes-benz/logos/197x71.png",
							models: [
								{
									id: 415,
									name: "cla",
									display_name: "CLA",
									usable: true,
									tags: ["Luxury"],
									count: 12
								},
								{
									id: 417,
									name: "c-class",
									display_name: "C-Class",
									usable: true,
									tags: ["Luxury"],
									count: 11
								},
								{
									id: 416,
									name: "gla",
									display_name: "GLA",
									usable: true,
									tags: ["Luxury"],
									count: 4
								},
								{
									id: 413,
									name: "a-class",
									display_name: "A-Class",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 429,
									name: "amg-gt",
									display_name: "AMG GT",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 414,
									name: "b-class",
									display_name: "B-Class",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 418,
									name: "e-class",
									display_name: "E-Class",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 423,
									name: "e-class-cabriolet",
									display_name: "E-Class Cabriolet",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 422,
									name: "gl",
									display_name: "GL",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 538,
									name: "glc",
									display_name: "GLC",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 419,
									name: "gle",
									display_name: "GLE",
									usable: true,
									tags: ["LUXURY_AUCTION", "Luxury"],
									count: 0
								},
								{
									id: 424,
									name: "gle-coupe",
									display_name: "GLE Coupe",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 536,
									name: "gls",
									display_name: "GLS",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 426,
									name: "ml-class",
									display_name: "ML-Class",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 428,
									name: "s-coupe",
									display_name: "S-Coupe",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 432,
									name: "sl",
									display_name: "SL",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 27,
							expand: false,
							is_popular: true
						},
						"mg-motors": {
							id: 63,
							name: "mg-motors",
							display_name: "MG Motors",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/mg-motors/logos/197x71.png",
							models: [
								{
									id: 555,
									name: "astor",
									display_name: "Astor",
									usable: true,
									tags: ["Assured"],
									count: 3
								},
								{
									id: 494,
									name: "hector",
									display_name: "Hector",
									usable: true,
									tags: ["Assured"],
									count: 2
								},
								{
									id: 522,
									name: "gloster",
									display_name: "Gloster",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 527,
									name: "hector-plus",
									display_name: "Hector Plus",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 523,
									name: "zs-ev",
									display_name: "ZS EV",
									usable: true,
									tags: ["Assured"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 5,
							expand: false,
							is_popular: true
						},
						mini: {
							id: 41,
							name: "mini",
							display_name: "Mini",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/mini/logos/197x71.png",
							models: [
								{
									id: 327,
									name: "cooper",
									display_name: "Cooper",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 462,
									name: "cooper-convertible",
									display_name: "Cooper Convertible",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 328,
									name: "cooper-s",
									display_name: "Cooper S",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 463,
									name: "countryman",
									display_name: "Countryman",
									usable: true,
									tags: ["Luxury"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 0,
							expand: false,
							is_popular: false
						},
						mitsubishi: {
							id: 43,
							name: "mitsubishi",
							display_name: "Mitsubishi",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/mitsubishi/logos/197x71.png",
							models: [
								{
									id: 332,
									name: "challenger",
									display_name: "Challenger",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 337,
									name: "montero",
									display_name: "Montero",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 339,
									name: "outlander",
									display_name: "Outlander",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 340,
									name: "pajero",
									display_name: "Pajero",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 342,
									name: "pajero-sport",
									display_name: "Pajero Sport",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 0,
							expand: false,
							is_popular: false
						},
						nissan: {
							id: 15,
							name: "nissan",
							display_name: "Nissan",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/nissan/logos/197x71.png",
							models: [
								{
									id: 434,
									name: "micra-active",
									display_name: "Micra Active",
									usable: true,
									tags: ["Active", "Micra Active", "Nissan", "micra"],
									count: 8
								},
								{
									id: 516,
									name: "kicks",
									display_name: "Kicks",
									usable: true,
									tags: ["Compact", "SUV"],
									count: 5
								},
								{
									id: 524,
									name: "magnite",
									display_name: "Magnite",
									usable: true,
									tags: ["Assured"],
									count: 5
								},
								{
									id: 241,
									name: "micra",
									display_name: "Micra",
									usable: true,
									tags: ["Active", "MicraActive", "Nissan", "micra"],
									count: 2
								},
								{
									id: 243,
									name: "sunny",
									display_name: "Sunny",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 245,
									name: "terrano",
									display_name: "Terrano",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 231,
									name: "350z",
									display_name: "350Z",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 232,
									name: "370z",
									display_name: "370Z",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 235,
									name: "evalia",
									display_name: "Evalia",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 244,
									name: "teana",
									display_name: "Teana",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 435,
									name: "x-trail",
									display_name: "X-Trail",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 23,
							expand: false,
							is_popular: true
						},
						renault: {
							id: 14,
							name: "renault",
							display_name: "Renault",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/renault/logos/197x71.png",
							models: [
								{
									id: 378,
									name: "kwid",
									display_name: "Kwid",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 41
								},
								{
									id: 226,
									name: "duster",
									display_name: "Duster",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 12
								},
								{
									id: 509,
									name: "triber",
									display_name: "Triber",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 8
								},
								{
									id: 531,
									name: "kiger",
									display_name: "Kiger",
									usable: true,
									tags: ["Assured"],
									count: 6
								},
								{
									id: 490,
									name: "captur",
									display_name: "Captur",
									usable: true,
									tags: ["Captur"],
									count: 1
								},
								{
									id: 227,
									name: "fluence",
									display_name: "Fluence",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 228,
									name: "koleos",
									display_name: "Koleos",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 408,
									name: "lodgy",
									display_name: "Lodgy",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 229,
									name: "pulse",
									display_name: "Pulse",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 230,
									name: "scala",
									display_name: "Scala",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 68,
							expand: false,
							is_popular: true
						},
						skoda: {
							id: 10,
							name: "skoda",
							display_name: "Skoda",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/skoda/logos/197x71.png",
							models: [
								{
									id: 558,
									name: "slavia",
									display_name: "Slavia",
									usable: true,
									tags: ["Assured"],
									count: 5
								},
								{
									id: 168,
									name: "fabia",
									display_name: "Fabia",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 3
								},
								{
									id: 542,
									name: "kushaq",
									display_name: "Kushaq",
									usable: true,
									tags: ["Assured"],
									count: 3
								},
								{
									id: 171,
									name: "octavia",
									display_name: "Octavia",
									usable: true,
									tags: ["Assured"],
									count: 3
								},
								{
									id: 173,
									name: "rapid",
									display_name: "Rapid",
									usable: true,
									tags: ["New Rapid", "Rapid", "Rapid New", "Skoda"],
									count: 2
								},
								{
									id: 174,
									name: "superb",
									display_name: "Superb",
									usable: true,
									tags: ["Assured"],
									count: 2
								},
								{
									id: 539,
									name: "kodiaq",
									display_name: "Kodiaq",
									usable: true,
									tags: ["Assured"],
									count: 1
								},
								{
									id: 439,
									name: "fabia-scout",
									display_name: "Fabia Scout",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 529,
									name: "karoq",
									display_name: "Karoq",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 169,
									name: "laura",
									display_name: "Laura",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 172,
									name: "octavia-combi",
									display_name: "Octavia Combi",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 176,
									name: "yeti",
									display_name: "Yeti",
									usable: true,
									tags: ["Assured"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 19,
							expand: false,
							is_popular: true
						},
						tata: {
							id: 3,
							name: "tata",
							display_name: "Tata",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/tata/logos/197x71.png",
							models: [
								{
									id: 396,
									name: "tiago",
									display_name: "Tiago",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 36
								},
								{
									id: 487,
									name: "nexon",
									display_name: "Nexon",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 26
								},
								{
									id: 500,
									name: "altroz",
									display_name: "Altroz",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 9
								},
								{
									id: 483,
									name: "harrier",
									display_name: "Harrier",
									usable: true,
									tags: ["Assured"],
									count: 2
								},
								{
									id: 480,
									name: "hexa",
									display_name: "Hexa",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 540,
									name: "punch",
									display_name: "Punch",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 69,
									name: "safari",
									display_name: "Safari",
									usable: true,
									tags: ["Discontinued"],
									count: 1
								},
								{
									id: 475,
									name: "tigor",
									display_name: "Tigor",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 78,
									name: "zest",
									display_name: "Zest",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 51,
									name: "aria",
									display_name: "Aria",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 52,
									name: "bolt",
									display_name: "Bolt",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 56,
									name: "indica-ev2",
									display_name: "Indica eV2",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 59,
									name: "indica-v2",
									display_name: "Indica V2",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 60,
									name: "indica-vista",
									display_name: "Indica Vista",
									usable: true,
									tags: ["Discontinued"],
									count: 0
								},
								{
									id: 55,
									name: "indicab",
									display_name: "Indicab",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 62,
									name: "indigo-cs",
									display_name: "Indigo CS",
									usable: true,
									tags: ["Discontinued"],
									count: 0
								},
								{
									id: 63,
									name: "indigo-ecs",
									display_name: "Indigo eCS",
									usable: true,
									tags: ["Discontinued"],
									count: 0
								},
								{
									id: 66,
									name: "manza",
									display_name: "Manza",
									usable: true,
									tags: ["BCM"],
									count: 0
								},
								{
									id: 67,
									name: "movus",
									display_name: "Movus",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 68,
									name: "nano",
									display_name: "Nano",
									usable: true,
									tags: ["Nano"],
									count: 0
								},
								{
									id: 395,
									name: "nano-genx",
									display_name: "Nano GenX",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 70,
									name: "safari-storme",
									display_name: "Safari Storme",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 397,
									name: "sumo-gold",
									display_name: "Sumo Gold",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 398,
									name: "sumo-grande",
									display_name: "Sumo Grande",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 73,
									name: "sumo-grande-mk-ii",
									display_name: "Sumo Grande MK II",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 399,
									name: "sumo-spacio",
									display_name: "Sumo Spacio",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 400,
									name: "sumo-victa",
									display_name: "Sumo Victa",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 571,
									name: "tiago-nrg",
									display_name: "Tiago NRG",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 75,
									name: "venture",
									display_name: "Venture",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 401,
									name: "vista-tech",
									display_name: "Vista Tech",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 79,
							expand: false,
							is_popular: true
						},
						toyota: {
							id: 6,
							name: "toyota",
							display_name: "Toyota",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/toyota/logos/197x71.png",
							models: [
								{
									id: 113,
									name: "etios",
									display_name: "Etios",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 10
								},
								{
									id: 106,
									name: "corolla-altis",
									display_name: "Corolla Altis",
									usable: true,
									tags: ["Assured"],
									count: 7
								},
								{
									id: 115,
									name: "etios-liva",
									display_name: "Etios Liva",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 7
								},
								{
									id: 394,
									name: "innova-crysta",
									display_name: "Innova Crysta",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 7
								},
								{
									id: 103,
									name: "camry",
									display_name: "Camry",
									usable: true,
									tags: ["Assured"],
									count: 1
								},
								{
									id: 510,
									name: "glanza",
									display_name: "Glanza",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 484,
									name: "yaris",
									display_name: "Yaris",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 102,
									name: "alphard",
									display_name: "Alphard",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 104,
									name: "celica",
									display_name: "Celica",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 105,
									name: "corolla",
									display_name: "Corolla",
									usable: true,
									tags: ["Corolla"],
									count: 0
								},
								{
									id: 108,
									name: "corona",
									display_name: "Corona",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 114,
									name: "etios-cross",
									display_name: "Etios Cross",
									usable: true,
									tags: ["Etios", "Liva"],
									count: 0
								},
								{
									id: 116,
									name: "fortuner",
									display_name: "Fortuner",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 117,
									name: "innova",
									display_name: "Innova",
									usable: true,
									tags: ["Crysta", "Innova"],
									count: 0
								},
								{
									id: 572,
									name: "innova-hycross",
									display_name: "Innova Hycross",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 118,
									name: "land-cruiser",
									display_name: "Land Cruiser",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 119,
									name: "land-cruiser-prado",
									display_name: "Land Cruiser Prado",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 123,
									name: "prius",
									display_name: "Prius",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 124,
									name: "qualis",
									display_name: "Qualis",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 580,
									name: "rumion",
									display_name: "Rumion",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 528,
									name: "urban-cruiser",
									display_name: "Urban Cruiser",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 567,
									name: "urban-cruiser-hyryder",
									display_name: "Urban Cruiser Hyryder",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 34,
							expand: false,
							is_popular: true
						},
						volkswagen: {
							id: 4,
							name: "volkswagen",
							display_name: "Volkswagen",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/volkswagen/logos/197x71.png",
							models: [
								{
									id: 86,
									name: "polo",
									display_name: "Polo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 6
								},
								{
									id: 553,
									name: "taigun",
									display_name: "Taigun",
									usable: true,
									tags: ["Assured"],
									count: 3
								},
								{
									id: 473,
									name: "ameo",
									display_name: "Ameo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 2
								},
								{
									id: 564,
									name: "virtus",
									display_name: "Virtus",
									usable: true,
									tags: ["Assured"],
									count: 2
								},
								{
									id: 88,
									name: "vento",
									display_name: "Vento",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 1
								},
								{
									id: 79,
									name: "1600",
									display_name: "1600",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 80,
									name: "beetle",
									display_name: "Beetle",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 81,
									name: "cross-polo",
									display_name: "Cross Polo",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 82,
									name: "jetta",
									display_name: "Jetta",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 84,
									name: "passat",
									display_name: "Passat",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 85,
									name: "phaeton",
									display_name: "Phaeton",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								},
								{
									id: 535,
									name: "t-roc",
									display_name: "T-Roc",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 520,
									name: "tiguan",
									display_name: "Tiguan",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 513,
									name: "tiguan-allspace",
									display_name: "Tiguan AllSpace",
									usable: true,
									tags: ["Assured"],
									count: 0
								},
								{
									id: 87,
									name: "touareg",
									display_name: "Touareg",
									usable: true,
									tags: ["Assured", "BCM"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: false,
							count: 14,
							expand: false,
							is_popular: true
						},
						volvo: {
							id: 54,
							name: "volvo",
							display_name: "Volvo",
							logo: "//spinny-images.s3.ap-south-1.amazonaws.com/images/cars/new/makes/volvo/logos/197x71.png",
							models: [
								{
									id: 365,
									name: "s60",
									display_name: "S60",
									usable: true,
									tags: ["Luxury"],
									count: 1
								},
								{
									id: 532,
									name: "xc40",
									display_name: "XC40",
									usable: true,
									tags: ["Luxury"],
									count: 1
								},
								{
									id: 366,
									name: "s80",
									display_name: "S80",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 452,
									name: "v40",
									display_name: "V40",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 367,
									name: "v40-cross-country",
									display_name: "V40 Cross Country",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								},
								{
									id: 368,
									name: "xc60",
									display_name: "XC60",
									usable: true,
									tags: ["Luxury"],
									count: 0
								},
								{
									id: 369,
									name: "xc90",
									display_name: "XC90",
									usable: true,
									tags: ["LUXURY_AUCTION"],
									count: 0
								}
							],
							usable: true,
							is_make_exist_on_max: true,
							count: 2,
							expand: false,
							is_popular: true
						}
					},
					make_list: [
						"maruti-suzuki",
						"hyundai",
						"honda",
						"tata",
						"renault",
						"kia",
						"jeep",
						"bmw",
						"toyota",
						"ford",
						"mahindra",
						"mercedes-benz",
						"nissan",
						"skoda",
						"volkswagen",
						"audi",
						"datsun",
						"land-rover",
						"mg-motors",
						"volvo",
						"chevrolet",
						"jaguar",
						"citroen",
						"fiat",
						"isuzu",
						"mini",
						"mitsubishi"
					]
				}
			}
		}
	}
};

module.exports = { opts, json };
