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
						type: "object"
					}
				}
			}
		}
	}
};
module.exports = { opts };
