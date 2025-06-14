document.addEventListener('DOMContentLoaded', function() {
            const categoryLinks = document.querySelectorAll('.filter-options a');
            const categoryContents = document.querySelectorAll('.category-content');
            const categoryTitle = document.querySelector('.page-title');
            const categoryIndicator = document.querySelector('.category-indicator');
            
            categoryLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    categoryLinks.forEach(l => l.classList.remove('active'));
                    categoryContents.forEach(c => c.classList.remove('active'));
                    
                    this.classList.add('active');
                    const category = this.getAttribute('data-category');
                    const content = document.getElementById(`${category}-content`);
                    
                    if (content) {
                        content.classList.add('active');
                        
                        const categoryName = this.textContent;
                        categoryTitle.textContent = `${categoryName}教程`;
                        categoryIndicator.textContent = `当前分类：${categoryName}`;
                    }
                });
            });
            
            const footerLinks = document.querySelectorAll('.footer-links a[data-category]');
            footerLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.getAttribute('data-category');
                    
                    const targetLink = document.querySelector(`.filter-options a[data-category="${category}"]`);
                    if (targetLink) {
                        targetLink.click();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            });
            
            const backToTopBtn = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });