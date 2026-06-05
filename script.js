(function () {
  var serviceMap = {
    "web-design": "Web Design",
    "social-media-management": "Social Media Management",
    branding: "Branding / Logo Design",
    "brand-photography": "Brand Photography",
    "drone-videography": "Drone / Videography"
  };

  var params = new URLSearchParams(window.location.search);
  var requestedService = params.get("service");
  var select = document.querySelector("[data-service-select]");

  if (select && requestedService && serviceMap[requestedService]) {
    select.value = serviceMap[requestedService];
  }

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "/confirmation/";
    });
  }
})();
