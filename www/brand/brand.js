// Draws a card per theme from callie.json, a copy of greylocklabs/themes'
// ports/json/callie.json; clicking a swatch copies its color.
(function () {
  var holder = document.querySelector(".palettes");
  if (!holder) return;

  var ansi = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"];
  var groups = [
    ["App", "colors", "app", ["background", "surface", "surface-alt", "border", "text", "text-muted", "text-faint", "accent", "accent-edge", "danger"], ""],
    ["Terminal", "terminal", "terminal", ansi, ""],
    ["Terminal, bright", "terminal", "terminal", ansi, "bright-"],
  ];

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function swatch(name, color) {
    var button = el("button", "swatch");
    button.type = "button";
    button.style.setProperty("--chip", color);
    button.setAttribute("aria-label", "Copy " + name + ", " + color);
    var chip = el("span", "chip");
    var hex = el("span", "hex", color);
    button.append(chip, el("span", "", name), hex);
    button.addEventListener("click", function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(color).then(function () {
        button.classList.add("copied");
        hex.textContent = "copied";
        setTimeout(function () {
          button.classList.remove("copied");
          hex.textContent = color;
        }, 1200);
      });
    });
    return button;
  }

  function card(theme) {
    var section = el("section", "palette");
    section.style.setProperty("--card-bg", theme.colors.background);
    section.style.setProperty("--card-fg", theme.colors.text);
    section.style.setProperty("--card-border", theme.colors.border);
    section.append(el("h3", "", theme.name));
    groups.forEach(function (group) {
      section.append(el("h4", "", group[0]));
      var grid = el("div", "swatches " + group[2]);
      group[3].forEach(function (key) {
        var color = theme[group[1]][group[4] + key];
        if (color) grid.append(swatch(key, color));
      });
      section.append(grid);
    });
    return section;
  }

  fetch(holder.dataset.src)
    .then(function (response) { return response.json(); })
    .then(function (data) {
      ["callie", "callie-light"].forEach(function (name) {
        if (data[name]) holder.append(card(data[name]));
      });
    })
    .catch(function () {
      holder.append(el("p", "", "The colors could not be loaded; they are in callie.json."));
    });
})();
