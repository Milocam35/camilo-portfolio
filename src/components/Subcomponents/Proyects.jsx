import { createSignal, onMount } from "solid-js";

export default function Projects() {
  const username = "Milocam35";
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100`; // trae más resultados

  const [repos, setRepos] = createSignal([]);

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
          repos().map((repo) => (
            <div class="bg-gray-200 dark:bg-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div class="aspect-video bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-700 dark:text-gray-300 text-sm">
                🧩 {repo.language ?? "Proyecto"}
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {repo.name}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {repo.description ?? "Sin descripción disponible."}
              </p>
              <p class="text-sm text-yellow-500 mb-2">⭐ {repo.stargazers_count}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Ver en GitHub
              </a>
            </div>
          ))
        ) : (
          <p class="text-center text-gray-500 dark:text-gray-400">
            Cargando proyectos destacados...
          </p>
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
