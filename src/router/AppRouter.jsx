

export const AppRouter = () => {
  return (
    
   <Routes>
 
//  ( status === 'authenticated') 
    <Route path="/*" element={ <JournalRoutes/>  } />
    <Route path="/auth/*" element={ <AuthRoutes/>  } />

 <Route path="/*" element= { <Navigate to='/auth/login' /> } />

 
</Routes>
  )
}
