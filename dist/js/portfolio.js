/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   portfolio.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jyao <jyao@student.42abudhabi.ae>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/04 16:48:46 by jyao              #+#    #+#             */
/*   Updated: 2023/07/04 17:10:28 by jyao             ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const accordionItemTitles = document.querySelectorAll(".accordion-item-title");

accordionItemTitles.forEach(accordionItemTitle => {
	accordionItemTitle.addEventListener("click", event => {
		accordionItemTitle.classList.toggle("active");
		const accordionItemBody = accordionItemTitle.nextElementSibling;

		if (accordionItemTitle.classList.contains("active"))
		{
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		}
		else
		{
			accordionItemBody.style.maxHeight = 0;
		}
	});
})
