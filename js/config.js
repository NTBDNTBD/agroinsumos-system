// js/config.js - Configuration Module
"use strict";

// Environment configuration
export const CONFIG = {
  // Supabase configuration - REPLACE WITH YOUR CREDENTIALS
  SUPABASE_URL: "YOUR_SUPABASE_URL_HERE", // Replace with your actual URL
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY_HERE", // Replace with your actual key
  
  // Application settings
  APP_NAME: "AgroInsumos",
  APP_VERSION: "2.0.0",
  
  // UI Configuration
  TOAST_DURATION: 5000,
  LOADING_DELAY: 1000,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  
  // Database tables
  TABLES: {
    PROFILES: 'profiles',
    PRODUCTS: 'products',
    SALES: 'sales',
    SUPPLIERS: 'suppliers'
  },
  
  // User roles
  ROLES: {
    ADMIN: 'admin',
    USER: 'user'
  },
  
  // Stock thresholds
  STOCK_THRESHOLDS: {
    LOW: 10,
    OUT: 0
  },
  
  // Form validation
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MIN_PASSWORD_LENGTH: 6,
    MAX_NAME_LENGTH: 100
  },
  
  // Error messages
  ERROR_MESSAGES: {
    // Authentication
    INVALID_CREDENTIALS: 'Email o contraseña incorrectos',
    EMAIL_NOT_CONFIRMED: 'Por favor confirma tu email',
    WEAK_PASSWORD: 'La contraseña debe tener al menos 6 caracteres',
    INVALID_EMAIL: 'Por favor ingresa un email válido',
    
    // Authorization
    ACCESS_DENIED: 'Acceso denegado',
    ADMIN_REQUIRED: 'Se requiere rol de administrador',
    LOGIN_REQUIRED: 'Debes iniciar sesión',
    
    // Database
    CONNECTION_ERROR: 'Error de conexión a la base de datos',
    TABLE_NOT_FOUND: 'Tabla no encontrada',
    OPERATION_FAILED: 'La operación falló',
    
    // General
    UNEXPECTED_ERROR: 'Ha ocurrido un error inesperado',
    NETWORK_ERROR: 'Error de red. Verifica tu conexión',
    TIMEOUT_ERROR: 'La operación ha tardado demasiado'
  },
  
  // Success messages
  SUCCESS_MESSAGES: {
    LOGIN: 'Sesión iniciada correctamente',
    LOGOUT: 'Sesión cerrada',
    REGISTER: 'Usuario registrado. Verifica tu email',
    SAVE: 'Guardado correctamente',
    DELETE: 'Eliminado correctamente',
    UPDATE: 'Actualizado correctamente',
    SALE_REGISTERED: 'Venta registrada correctamente',
    ROLE_ASSIGNED: 'Rol asignado correctamente'
  }
};

// Initialize Supabase client
let supabaseClient = null;

export function initializeSupabase() {
  if (!CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_ANON_KEY || 
      CONFIG.SUPABASE_URL === "YOUR_SUPABASE_URL_HERE" || 
      CONFIG.SUPABASE_ANON_KEY === "YOUR_SUPABASE_ANON_KEY_HERE") {
    throw new Error('Supabase configuration is missing. Please update CONFIG in js/config.js');
  }
  
  try {
    supabaseClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
    return supabaseClient;
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    throw new Error('Failed to initialize database connection');
  }
}

export function getSupabaseClient() {
  if (!supabaseClient) {
    throw new Error('Supabase not initialized. Call initializeSupabase() first.');
  }
  return supabaseClient;
}

// Development mode detection
export const isDevelopment = () => {
  return window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1' ||
         window.location.hostname === '';
};

// API endpoints for development
export const API_ENDPOINTS = {
  HEALTH: '/api/health',
  USERS: '/api/users',
  ADMIN: '/api/admin'
};

// Feature flags
export const FEATURES = {
  OFFLINE_MODE: false,
  ADVANCED_ANALYTICS: false,
  BULK_OPERATIONS: true,
  EXPORT_FUNCTIONALITY: true,
  REAL_TIME_UPDATES: true
};

export default CONFIG;
