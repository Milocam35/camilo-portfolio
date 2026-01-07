import { createSignal, onMount } from "solid-js";

export default function Projects() {
  const username = "Milocam35";
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100`; // trae más resultados

  const [repos, setRepos] = createSignal([]);

  // Mapeo de lenguajes a badges de shields.io con colores personalizados
  const languageConfig = {
    JavaScript: {
      badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      gradient: "from-yellow-400 to-yellow-600",
      icon: "⚡"
    },
    TypeScript: {
      badge: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      gradient: "from-blue-500 to-blue-700",
      icon: "🔷"
    },
    Python: {
      badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      gradient: "from-blue-400 to-yellow-400",
      icon: "🐍"
    },
    Java: {
      badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      gradient: "from-red-500 to-orange-600",
      icon: "☕"
    },
    HTML: {
      badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      gradient: "from-orange-500 to-red-600",
      icon: "🌐"
    },
    CSS: {
      badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      gradient: "from-blue-400 to-blue-600",
      icon: "🎨"
    },
    C: {
      badge: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
      gradient: "from-blue-600 to-blue-800",
      icon: "⚙️"
    },
    "C++": {
      badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white",
      gradient: "from-blue-600 to-purple-700",
      icon: "⚙️"
    },
    "C#": {
      badge: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white",
      gradient: "from-purple-600 to-purple-800",
      icon: "💎"
    },
    Ruby: {
      badge: "https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white",
      gradient: "from-red-600 to-red-800",
      icon: "💎"
    },
    Go: {
      badge: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
      gradient: "from-cyan-400 to-blue-500",
      icon: "🐹"
    },
    Rust: {
      badge: "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white",
      gradient: "from-orange-600 to-gray-800",
      icon: "🦀"
    },
    PHP: {
      badge: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
      gradient: "from-purple-500 to-indigo-600",
      icon: "🐘"
    },
    Swift: {
      badge: "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white",
      gradient: "from-orange-500 to-red-500",
      icon: "🦅"
    },
    Kotlin: {
      badge: "https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white",
      gradient: "from-purple-500 to-blue-600",
      icon: "🎯"
    },
    Dart: {
      badge: "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white",
      gradient: "from-blue-500 to-cyan-600",
      icon: "🎯"
    },
    Shell: {
      badge: "https://img.shields.io/badge/Shell-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white",
      gradient: "from-green-600 to-green-800",
      icon: "💻"
    },
    Jupyter: {
      badge: "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white",
      gradient: "from-orange-500 to-gray-700",
      icon: "📓"
    },
    "Jupyter Notebook": {
      badge: "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white",
      gradient: "from-orange-500 to-gray-700",
      icon: "📓"
    }
  };

  // Función para obtener la configuración del lenguaje
  const getLanguageConfig = (language) => {
    return languageConfig[language] || {
      badge: `https://img.shields.io/badge/${language || "Code"}-333333?style=for-the-badge&logo=code&logoColor=white`,
      gradient: "from-gray-500 to-gray-700",
      icon: "📦"
    };
  };

  onMount(async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      // Ordenar por estrellas descendente y tomar los 6 primeros
      const destacados = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);

      setRepos(destacados);
    } catch (error) {
      console.error("Error al cargar repositorios:", error);
    }
  });

  return (
    <section class="py-16 px-4 md:px-8 w-full max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Proyectos Destacados ⭐
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Repositorios más populares de mi GitHub según número de estrellas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos().length > 0 ? (
          repos().map((repo) => {
            const langConfig = getLanguageConfig(repo.language);
            return (
              <div class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Header con gradiente y logo del lenguaje */}
                <div class={`relative h-32 bg-gradient-to-br ${langConfig.gradient} flex items-center justify-center overflow-hidden`}>
                  <div class="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                  <div class="relative z-10 flex flex-col items-center gap-2">
                    <span class="text-5xl filter drop-shadow-lg">{langConfig.icon}</span>
                    <img
                      src={langConfig.badge}
                      alt={repo.language || "Technology"}
                      class="h-7 filter drop-shadow-md hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  {/* Decoración */}
                  <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  <div class="absolute bottom-0 left-0 w-16 h-16 bg-black/10 rounded-full blur-xl"></div>
                </div>

                {/* Contenido */}
                <div class="p-6">
                  {/* Título del proyecto */}
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                    {repo.name}
                  </h3>

                  {/* Descripción */}
                  <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 min-h-[3.6rem]">
                    {repo.description ?? "Sin descripción disponible."}
                  </p>

                  {/* Stats y botón */}
                  <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    {/* Estrellas */}
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                        <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
                          {repo.stargazers_count}
                        </span>
                      </div>
                    </div>

                    {/* Botón GitHub */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 group/btn"
                    >
                      <span>Ver código</span>
                      <svg class="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div class="col-span-full flex flex-col items-center justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mb-4"></div>
            <p class="text-center text-gray-500 dark:text-gray-400 text-lg">
              Cargando proyectos destacados...
            </p>
          </div>
        )}
      </div>

      <div class="text-center mt-12">
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          Ver más proyectos en GitHub
        </a>
      </div>
    </section>
  );
}
