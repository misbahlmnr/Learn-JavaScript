# Javascript
Repo ini berisi tentang beberapa codingan javascript awal yang mungkin bisa bermanfaat kedepannya

# Beberapa cheatsheet Javascript
1.  Array.from(kumpulan_nodelist); //Cara Mengubah Nodelist menjadi Array

2.  elemen.textContent().includes('REONEH4XOR') //akan mengambil isi text dari sebuah elemen yang didalamnya ada text tertentu
    pada saat kita mempunyai atribut [data-duration="13:07"], kita bisa mengambilnya dengan mengetikan var x = elemen.dataset.duration;

3.  scrollIntoView(); --> untuk menyekrol ke tujuan

4.  DOM Selection\n
    getElementById() -> hasil = element
    getElementsByTagName() -> html colection
    getElementsByClassName() -> htmlcollection
    querySelector() -> element
    querySelectorAll() -> nodelist

5.  DOM Manipulation (Manipulasi Elemen)
    elemen.innerHTML
    elemen.style.<properties>
    elemen.setAttribute('nama atribut', 'nilai atribut')
    elemen.getAttribute()
    elemen.removeAttribute()
    elemen.classList.add() -> menambah class
    elemen.classList.remove() -> menghapus class
    elemen.classList.toggle() ->
    elemen.classList.item() -> mengecek class untuk yang classnya banyak pada 1 elemen
    elemen.classList.contains() -> cek class tertentu
    elemen.classList.replace() -> mengganti class

6.  DOM Manipulation 2 (Manipation Nodes)
    document.createElement() -> untuk membuat elemen
    document.createTextNode() -> untuk membuat text didalam elemen
    node.appendChild() -> untuk menyimpan elemen yang sudah dibuat
    node.insertBefore() -> untuk menyimpan sebelum elemen tertentu
    parentNode.removeChild() -> menghapus child (anak) dari sebuah elemen
    parentNode.replaceChild(elemen baru, elemen lama) -> mengganti child dengan elemen baru
    ....

7.  DOM Manipulation 2 new
    parentNode.append() -> sama dengan appendChild()
    parentNode.prepend()
    childNode.before()
    childNode.after()
    childNode.remove()
    childNode.replaceWith()

8.  event Mouse Javascript
    mouseenter -> digunakan ketika mouse diarahkan ke elemen
    mouseleave -> digunakan ketika mouse keluar dari elemen
    mousemove -> ketika mouse bergerak di ...
    input -> ketika input di geser dll 

9.  DOM Traversal method
    parentNode             -> Node
    parentElement	       -> Element
    nextSibling	       -> Node
    nextElementSibling     -> Element
    previousSibling        -> Node
    previousElementSibling -> Element

10. Prevent Default Method (menghentikan aksi default)
    ObjectEvent.preventDefault()

11. Event Bubbling Method
    ObjectEvent.stopPropagation()

