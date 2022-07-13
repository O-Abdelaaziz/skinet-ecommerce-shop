﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly StoreContext _storeContext;

        public GenericRepository(StoreContext storeContext)
        {
            this._storeContext = storeContext;
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await this._storeContext.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await this._storeContext.Set<T>().FindAsync(id);
        }

        public async Task<T> GetEntityWithSpecification(ISpecification<T> specefication)
        {
            return await ApplySpecefication(specefication).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> ListAllEntitiesWithSpecificationAsync(ISpecification<T> specefication)
        {
            return await ApplySpecefication(specefication).ToListAsync();
        }

        private IQueryable<T> ApplySpecefication(ISpecification<T> specification)
        {
            return SpecificationEvaluator<T>.GetQuery(_storeContext.Set<T>().AsQueryable(), specification);
        }
    }
}
