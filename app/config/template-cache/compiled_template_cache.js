angular.module('capFinPlanning.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/footer.tmpl.html",
    "");
  $templateCache.put("views/header.tmpl.html",
    "");
  $templateCache.put("views/home.html",
    "<div class=container><div class=row><div class=\"jumbotron clearfix\"><div class=col-sm-3><img src=\"./app/images/bill.jpg\"><br><div style=font-size:24px><strong><a ui-sref=capFinPlanning.resume>Bill Christian</a></strong></div><div style=font-size:12px>Certified Financial Planner ™</div><br><br></div><div class=\"col-sm-8 col-sm-offset-1`\"><h1>Capital Financial Planning</h1><h3>Assisting Clients In the Accumlation and Preservation or Wealth</h3><p>We identify your goals and your dreams and then plan to achieve them, while building and preserving wealth.</p></div></div></div><div class=row><div class=\"col-md-8 col-md-offset-2\"><ul><li><strong>Are you ready for <a ui-sref=capFinPlanning.servicesretirement>retirement</a>? Is it important to you to have a guaranteed monthly income?</strong></li><li><strong>Do you need a <a ui-sref=capFinPlanning.servicescomprehensive>comprehensive financial plan</a> for tax, estate, investment, retirement and education issues?</strong></li><li><strong>Do you need a second opinion about the proper allocation of your <a ui-sref=capFinPlanning.servicesinvestments>investments</a>? Are you worried about your 401(k)?</strong></li><li><strong>Is your <a ui-sref=capFinPlanning.servicesestate>estate plan</a> up to date?</strong></li><li><strong>Is your life insurance adequate?</strong></li></ul></div></div></div>");
  $templateCache.put("views/resume.html",
    "<div class=container><div class=row><div class=\"col-md-6 col-md-offset-3\"><h2>Background</h2><p>Founded Capital Financial Planning Group in 1996 after a lengthy career as corporate legal counsel.</p><h2>Focus</h2><p>Planning and investing for retirement is our main focus. Building and protecting your nest egg is achieved always by diversification and by selecting only the best and most experienced companies for: individual stocks, mutual funds, REIT’s (real estate), annuities, insurance, energy or other investments.</p><h2>Designations</h2>J.D., CFP<h2>Teaching</h2><ul><li>Adjunct Professor, Financial Planning</li><li>University of Houston 2006-2008</li></ul><h2>Honors</h2><ul><li><a href=\"http://www.fivestarprofessional.com/find-a-professional?market_id=25&prof_id=2&professional_name=Search+for+professional+name&company_name=capital+financial+planning\" target=_blank>Five-Star Wealth Manager</a>, Texas Monthly, Septembers 2009-{{year}}</li></ul><h2>Licenses</h2>Securities: Series 7, 63, 79 Insurance & Annuities: TX, FL, IL<h2>Memberships</h2>Financial Planning Association (FPA) Houston FPA Chapter State Bar of Texas<h2>Education</h2>The University of North Carolina (Chapel Hill), B.A. English The University of Virginia Law School, J.D. Tulane School of Law, L.L.B.</div></div></div>");
  $templateCache.put("views/root.html",
    "<nav class=\"navbar navbar-default\"><div class=container><div class=row><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#bs-example-navbar-collapse-1 aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#>{{brand}}</a></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav\"><li><a ui-sref=capFinPlanning.resume>Company Profile</a></li><li uib-dropdown on-toggle=toggled(open)><a href id=simple-dropdown uib-dropdown-toggle>Services <strong class=caret></strong></a><ul class=dropdown-menu uib-dropdown-menu aria-labelledby=simple-dropdown><li ng-repeat=\"choice in items\"><a href=# ui-sref={{choice.uisref}}>{{choice.name}}</a></li></ul></li></ul></div></div></div></nav><div ui-view></div><hr><div class=container><div class=row><p style=\"text-align: center\">William G. Christian, J.D., CFP</p><p style=\"text-align: center\">975 Corbindale, Suite 109, Houston TX 77024</p><p style=\"text-align: center\"><strong>Tel: 713-932-1955</strong> | Fax: 713-932-9132</p><p style=\"text-align: center\"><strong><a href=\"mailto:bill@capitalfinancialplanning.com?cc=billchristian@ims-securities.com\">Email:</a></strong> billchristian@ims-securities.com</p><p style=\"font-size: 10px;text-align: center\">ONLY TEXAS RESIDENTS ARE AUTHORIZED TO USE THESE SERVICES</p><div class=\"col-md-6 col-md-offset-3\"><p style=\"font-size: 6px\">William Christian is a Registered Representative of IMS Securities, Inc.(IMS), Member <a href=\"http://www.finra.org/\" target=_blank>FINRA</a>/<a href=\"http://www.sipc.org/\" target=_blank>SIPC</a> and an Investment Advisor Representative of IMS Financial Advisors, Inc.(IMSFA), a Registered Investment Advisor located 10205 Westheimer Rd., Suite 500, Houston, TX 77042 (713) 266-2993. All information herein has been prepared solely for informational purposes, and is not an offer to buy or sell, or a solicitation of an offer to buy or sell any security or instrument or to participate in any particular trading strategy. William Christian, Capital Financial Planning Group, IMS, and IMSFA do not make any representations or warranties as to the accuracy, timeliness, suitability, completeness, or relevance of any information prepared by any unaffiliated third party, whether linked to this web site or incorporated herein, and take no responsibility. All such information is provided solely for convenience purposes only. William Christian, Capital Financial Planning Group, IMS, and IMSFA do not endorse, control, or receive compensation from any of the third party advertisers within this website. William Christian, Capital Financial Planning Group, IMS, and IMSFA are not affiliated with any of the firms or entities listed unless specifically stated.</p></div></div></div>");
  $templateCache.put("views/services-comprehensive.html",
    "<div class=container><div class=row><div class=\"col-xs-8 col-xs-offset-2\"><h1>Financial Planning</h1><h2>Comprehensive Financial Plan</h2><p>One of the ways to build a roadmap to financial freedom is through a comprehensive financial plan. We can provide such a plan which will assist you in achieving your financial goals and objectives. The components of a comprehensive plan include not only the retirement planning, estate planning, and investment planning described in other parts of this website but also educational planning for the funding of college education or other educational goals and tax planning to suggest tax advantages you might otherwise overlook. With a financial roadmap you will be more confident about how to find financial freedom.</p><h2>Modular Plan</h2><p>You may wish to concentrate on just one component of a financial plan, for example: \"retirement\", in which case a modular plan could be prepared for you to address that specific concern.</p></div></div></div>");
  $templateCache.put("views/services-estate.html",
    "<div class=container><div class=row><div class=\"col-xs-8 col-xs-offset-2\"><h2>Estate Planning</h2><p>With our legal background and years of experience in dealing with estates, we are in a position to advise you concerning the preservation of wealth and the transfer of wealth.</p><p>We will refer you to board certified estate planning attorneys for the preparation of the estate planning documents you need. We make certain that you receive the highest quality legal assistance at reasonable cost.</p><p>Life insurance is often a very important part of estate planning and we can provide life insurance designed to meet your needs through highly rated life insurance companies.</p></div></div></div>");
  $templateCache.put("views/services-investments.html",
    "<div class=container><div class=row><div class=\"col-xs-8 col-xs-offset-2\"><h1>Investments</h1><h2>General Philosophy</h2><p>Our investment philosophy is grounded in a value investor's approach to equity investments. The value investor generally seeks to make investments in equities which are temporarily out of favor but have long-term value or potential for growth.</p><h2>Mutual Funds</h2><p>We seek to diversify a portfolio by investing in different categories such as large cap, mid-cap and small cap. We also diversify portfolios by including international investments. We constantly review investments to select only those which continue to produce a consistent positive return over the years. We have a preference for \"value\" investments/long-term records of low volatility and high returns.</p><h2>Individual Stocks</h2><p>In selecting individual stocks for investment again we emphasize the value approach, selecting stocks with low price-to-earnings ratios which have the potential for earnings growth. Diversification is achieved by limiting overall investment in the broad categories of industries to certain percentages so that heavy concentration in any one area is avoided. Most of our investments in individual stocks are in large cap or mid-cap stocks with a very limited selection of small cap stocks.</p><p>We recommend investment in individual stocks almost exclusively for taxable accounts, as opposed to tax-deferred accounts.</p><h2>Alternative Investments</h2><p>We recommend alternative investments from time to time, again to diversify investments and to achieve the optimum asset allocation. These alternative investments may include private placements in REIT's, oil &amp; gas, and equipment leasing. The alternative investments are reviewed by IMS Securities, Inc. A review is done by IMS and then further due diligence is carried out by us to make certain that the investment(s) in question is appropriate for you.</p></div></div></div>");
  $templateCache.put("views/services-retirement.html",
    "<div class=container><div class=row><div class=\"col-xs-8 col-xs-offset-2\"><h2>Retirement Planning</h2><p>One of the most difficult decisions that people face is deciding what to do in retirement and when to make that transition.</p><p>Where do you want to be and what do you want to be doing in the golden years?</p><p>With our counseling you can achieve the financial security you seek and realize your dreams.</p><h2>Annuities</h2><p>Many companies today offer annuities with guaranteed income for life and it's our job to determine what would be tailored to your situation and show you a range of appropriate choices that are in your best interests.</p></div></div></div>");
}]);
