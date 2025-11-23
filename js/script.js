tailwind.config = {
    theme: {
        extend: {
            colors: {
                noir: '#0a0a0a',
                denim: '#1e293b',
                denimDark: '#0f172a',
                denimLight: '#5b7fa6',
                accent: '#cbd5e1',
            },
            fontFamily: {
                // Geneva no está en Google Fonts, así que dejamos las de sistema como respaldo seguro
                main: ['Geneva', 'Tahoma', 'Verdana', 'sans-serif'], 
                
                // AQUÍ ESTÁ EL CAMBIO: Usamos 'Permanent Marker' en lugar de 'Mistral'
                lab: ['"Permanent Marker"', 'cursive'], 
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
            }
        }
    }
}
        document.addEventListener('DOMContentLoaded', function() {
            // 1. Seleccionar elementos
            const filterBtns = document.querySelectorAll('.filter-btn');
            const productItems = document.querySelectorAll('.product-item');

            // 2. Función para manejar el clic
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // a) Quitar clase activa de todos los botones
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-white', 'text-noir', 'border-white');
                        b.classList.add('text-gray-400', 'border-gray-700');
                    });

                    // b) Activar el botón clicado
                    btn.classList.remove('text-gray-400', 'border-gray-700');
                    btn.classList.add('bg-white', 'text-noir', 'border-white');

                    // c) Obtener el valor del filtro
                    const filterValue = btn.getAttribute('data-filter');

                    // d) Mostrar/Ocultar productos
                    productItems.forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
                        
                        if (filterValue === 'todos' || filterValue === itemCategory) {
                            // Mostrar
                            item.classList.remove('hidden');
                            // Pequeña animación de entrada
                            item.classList.add('fade-in'); 
                        } else {
                            // Ocultar
                            item.classList.add('hidden');
                        }
                    });
                });
            });
        });
