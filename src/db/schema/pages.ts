import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { auditSchema } from './audit';
import { ApiConfig } from '../routes';
// Nombre de la tabla
export const tableName = 'pages';
export const route = 'pages';

// Definición de la estructura de la tabla
export const definition = {
  ID: integer('ID').primaryKey(), // Se define como clave primaria e INTEGER
  name: text('name'), // Campo de texto para el nombre de la página
  slug: text('slug'), // Campo de texto para el slug de la página
  html_code: text('html_code'), // Campo de texto para el código HTML de la página
  css_code: text('css_code'), // Campo de texto para el código CSS de la página
  createdOn: integer('createdOn'),
  updatedOn: integer('updatedOn')
};

// Creación de la tabla
export const table = sqliteTable(tableName,   {
  ...definition,
  ...auditSchema
});

export const fields: ApiConfig['fields'] = {
  tags: {
    type: 'string[]'
  }
};

// Relaciones (si es necesario)
export const relation = relations(table, (/* Define tus relaciones aquí si es necesario */) => ({}));

// Configuración de acceso (si es necesario)
export const access = {
  operation: {
      read: true,
        create: true,
        update: true,
        delete: true
    // Define las reglas de acceso para crear, actualizar y eliminar páginas
    // Por ejemplo: create: isAdminOrEditor
  }
};

// Ganchos (hooks) para manipular datos (si es necesario)
export const hooks = {
  resolveInput: {
    // Define ganchos para manipular datos de entrada antes de crear o actualizar una página
  }
};
