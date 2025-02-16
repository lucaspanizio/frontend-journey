/**
 * Tipo utilitário que adiciona o prefixo `$` a todas as chaves de uma interface.
 *
 * @template T - A interface original cujas propriedades não têm prefixo.
 *
 * @example
 * interface ExampleProps {
 *   size?: string;      // Propriedade sem prefixo
 *   color?: string;     // Propriedade sem prefixo
 *   text?: string;      // Propriedade sem prefixo
 * }
 *
 * // Aplicando WithDollarPrefix
 * type PrefixedProps = WithDollarPrefix<ExampleProps>;
 *
 * // Resultado:
 * // type PrefixedProps = {
 * //   $size?: string;      // Propriedade com prefixo
 * //   $color?: string;     // Propriedade com prefixo
 * //   $text?: string;      // Propriedade com prefixo
 * // }
 */
export type WithDollarPrefix<T> = {
  [K in keyof T as `$${string & K}`]: T[K]
}

/**
 * Tipo utilitário que remove o prefixo `$` de todas as chaves de uma interface.
 *
 * @template T - A interface original com propriedades que podem ter o prefixo `$`.
 *
 * @example
 * interface ExampleProps {
 *   $size?: string;      // Propriedade com prefixo
 *   $color?: string;     // Propriedade com prefixo
 *   text?: string;       // Propriedade sem prefixo
 * }
 *
 * // Aplicando WithoutDollarPrefix
 * type CleanedProps = WithoutDollarPrefix<ExampleProps>;
 *
 * // Resultado:
 * // type CleanedProps = {
 * //   size?: string;      // Renomeado sem prefixo
 * //   color?: string;     // Renomeado sem prefixo
 * //   text?: string;      // Mantido
 * // }
 */
export type WithoutDollarPrefix<T> = {
  [K in keyof T as K extends `$${infer U}` ? U : K]: T[K]
}
