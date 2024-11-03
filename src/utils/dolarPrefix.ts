import { WithDollarPrefix, WithoutDollarPrefix } from '@/types/dolarPrefix';

/**
 * Adiciona um prefixo de cifrão (`$`) a cada chave das propriedades do objeto fornecido.
 *
 * @template T - O tipo do objeto original cujas propriedades serão prefixadas.
 *
 * @param {T} props - O objeto cujas chaves serão modificadas para incluir o prefixo `$`.
 * @returns {WithDollarPrefix<T>} Um novo objeto com os mesmos valores do objeto de entrada,
 * mas com cada chave prefixada por `$`.
 *
 * @example
 * const originalProps = { size: 'large', color: 'red' };
 * const prefixedProps = addDollarPrefix(originalProps);
 * // Resultado: { $size: 'large', $color: 'red' }
 */
export function addDollarPrefix<T extends object>(
  props: T,
): WithDollarPrefix<T> {
  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => [`$${key}`, value]),
  ) as WithDollarPrefix<T>;
}

/**
 * Removes the dollar sign (`$`) prefix from each key of the given object's properties.
 *
 * @template T - The original object type whose properties are to be modified.
 *
 * @param {T} props - The object whose keys will be modified to remove the `$` prefix.
 * @returns {Object} A new object with the same values as the input,
 * but with each key stripped of the `$` prefix.
 *
 * @example
 * const prefixedProps = { $size: 'large', $color: 'red' };
 * const originalProps = removeDollarPrefix(prefixedProps);
 * // Result: { size: 'large', color: 'red' }
 */
export function removeDollarPrefix<T extends object>(
  props: T,
): WithoutDollarPrefix<T> {
  return Object.fromEntries(
    Object.entries(props).map(([key, value]) => [
      key.startsWith('$') ? key.slice(1) : key,
      value,
    ]),
  ) as WithoutDollarPrefix<T>;
}
