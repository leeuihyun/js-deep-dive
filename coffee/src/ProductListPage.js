export default function ProductListPage({ $target }) {
    const $page = document.createElement("div");
    $page.className = "ProductListPage";
    $page.innerHTML = "<h1>ProductListPage</h1>";
    this.render = () => {
        $target.appendChild($page);
    };
}
